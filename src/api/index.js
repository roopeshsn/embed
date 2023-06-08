import { Account, Client, Databases } from 'appwrite'
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6469b48e9a9957ea619f')
const databases = new Databases(client);
const account = new Account(client)
const dbId = '646a23a86d6f1b2ba8a2'
const formsCollectionId = '6481bcdf87ed0f0b5053'
const responsesCollectionId = '6481fa429717c0bc986d'

export {client, account, databases, dbId, formsCollectionId, responsesCollectionId}
