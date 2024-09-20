import {CognitoIdentityProviderClient, InitiateAuthCommand} from '@aws-sdk/client-cognito-identity-provider';
import dotenv from 'dotenv'

dotenv.config()

const client = new CognitoIdentityProviderClient({region: 'us-east-1'});

const input = {
    AuthFlow: "USER_PASSWORD_AUTH",
    AuthParameters: {
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    ClientId: process.env.CLIENT_ID,
    UserPoolId: process.env.USER_POOL_ID
};

const command = new InitiateAuthCommand(input);
const response = await client.send(command);

console.log(`Response: ${JSON.stringify(response)}`)