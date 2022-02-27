import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();
const iamRole = config.require("iamRole");
const accountID = config.require("accountID");


const keyPolicy = {
    Version: "2012-10-17",
    Id: "policy",
    Statement: [
        // This statement allows all users to view the key in the console
        {
            Sid: "AllowGetKeys",
            Effect: "Allow",
            Action: ["kms:Describe*", "kms:Get*", "kms:List*"],
            Principal: {
                "AWS": [`arn:aws:iam::${accountID}:root`]
            },
            Resource: "*",
        },
        // This is a configurable statement that we can use to allow access to an IAM arn
        {
            Sid: "AllowIAMUserAccessKeys",
            Effect: "Allow",
            Action: ["kms:*"],
            Principal: {
                "AWS": iamRole,
            },
            Resource: "*",
        }
    ]
}

// Create a new KMS key
const key = new aws.kms.Key("stack-encryption-key", {
    deletionWindowInDays: 10,
    description: "KMS key for encrypting Pulumi secret values",
    policy: JSON.stringify(keyPolicy),
});

// Create a new alias to the key
const alias = new aws.kms.Alias("alias/stack-encryption-key", {
    targetKeyId: key.keyId,
});

// Export the arns
export const keyArn = key.arn
export const aliasArn = alias.arn