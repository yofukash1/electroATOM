import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('741de2ec-5c9b-4195-8565-dd3aa6bbda41', '1Kenyon.Grimes36@yahoo.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=3', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('737e6286-a051-4199-9105-21217e86fa82', '9Jaquan99@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=11', 'mno345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('6dcd4131-c6a3-47dc-b56c-4316b13be122', '17Ismael23@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('18614949-2da4-4df7-bd58-34185eefdcba', '25Neoma.Collier82@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('4edad4a8-79b2-47e2-9ca9-1072c0582976', '33Tommie.Prohaska@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=35', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('8146d1dd-2b89-470f-bb8a-f1b6a82c2a94', '41Wanda_Hilpert94@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0731a2ec-6cf5-4622-8101-8c25d5ce200e', '49Eino77@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=51', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('0fddba07-9ed4-4c37-904a-670c8079e001', '57Ressie17@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=59', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('f26dc3ab-d133-4427-838a-e1b5af1f78df', '73Claire.Kunde54@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('7715f842-6c9a-459a-8d29-4242caa0f7e9', 'fr', 'Spanish', false);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('1a6291d3-7f42-4fdb-b395-fc773260a3bc', 'de', 'Spanish', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('b14c764f-72b5-48be-b41d-d51af54cfa4b', 'en', 'French', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('74e2b624-fbf2-40f7-bfc1-ad61a91f927f', 'fr', 'Italian', false);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('2fd85a04-4db4-4307-898a-3729947d6950', 'en', 'French', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('15b76720-92c7-47df-bb9c-20c193d6ec7d', 'de', 'German', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('cf403d4f-611f-4805-99d0-e16d7567a039', 'fr', 'Spanish', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('99aa5251-d53d-4957-a159-8c39a559f9b6', 'fr', 'English', false);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('a77e2b46-65e1-4343-b4f4-31f3dd17a120', 'it', 'Spanish', true);
INSERT INTO "Language" ("id", "code", "name", "isActive") VALUES ('b599b2f7-6423-43dc-9ca4-d73ac6816043', 'de', 'English', true);

INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('72888b50-f3cd-4111-93b5-79dc6b1c3959', 'Power Cost Forecast', 'A detailed outlook on the electricity market dynamics.', 'Approved', '2025-02-28T08:31:49.789Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('1ab47216-286d-4877-82e7-a76b41b5ddc4', 'Renewable Energy Predictions', 'Insights into the future pricing of energy resources.', 'Approved', '2024-09-27T09:05:26.448Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('fef142c4-004a-4f49-b048-91fd567a6e18', 'Energy Price Projection', 'Predictions on how renewable energy will affect electricity costs.', 'Completed', '2025-05-06T10:23:24.730Z', 'f26dc3ab-d133-4427-838a-e1b5af1f78df');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('1acd7be3-6e8e-4ab2-aad6-f1c316f8a4e8', 'Energy Price Projection', 'Insights into the future pricing of energy resources.', 'Completed', '2025-01-05T23:39:31.350Z', '18614949-2da4-4df7-bd58-34185eefdcba');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('2cc4fae9-fee7-4e9f-8e95-0f34d3517d55', 'Renewable Energy Predictions', 'A comprehensive forecast of power prices for the next decade.', 'In Progress', '2025-09-02T22:33:56.971Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('4f44c448-4143-4917-9627-fcf984c513aa', 'Energy Price Projection', 'Analyzing future electricity costs based on current trends.', 'In Progress', '2025-11-03T11:41:36.931Z', '741de2ec-5c9b-4195-8565-dd3aa6bbda41');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('0da53c2f-3448-4be9-a3e8-1e7c59af1808', 'Electricity Market Outlook', 'Predictions on how renewable energy will affect electricity costs.', 'Reviewed', '2024-02-01T18:47:23.031Z', '6dcd4131-c6a3-47dc-b56c-4316b13be122');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('61fdac5e-6847-4a89-9732-38bfc67a7b93', 'Energy Price Projection', 'Insights into the future pricing of energy resources.', 'In Progress', '2024-12-14T13:44:46.344Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('7d299577-1589-4a2e-86a3-b4c905fc38a9', 'Energy Price Projection', 'Insights into the future pricing of energy resources.', 'Completed', '2024-10-22T14:34:38.738Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Prediction" ("id", "title", "description", "status", "predictionDate", "userId") VALUES ('91a0fa51-ba52-4e5a-be78-5c3bdfad4785', 'Future Electricity Trends', 'Analyzing future electricity costs based on current trends.', 'Pending', '2024-08-27T22:00:41.006Z', '6dcd4131-c6a3-47dc-b56c-4316b13be122');

INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('712ff95b-76f1-4af6-bd45-16c399b94a10', 'https://i.imgur.com/YfJQV5z.png?id=171', 'https://i.imgur.com/YfJQV5z.png?id=172', 902, '4f44c448-4143-4917-9627-fcf984c513aa');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('5d9fb56f-fec6-4216-827c-88086dfc05a6', 'https://i.imgur.com/YfJQV5z.png?id=175', 'https://i.imgur.com/YfJQV5z.png?id=176', 351, 'fef142c4-004a-4f49-b048-91fd567a6e18');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('ddb4af7f-6006-446e-a3ce-e52dfaf4f613', 'https://i.imgur.com/YfJQV5z.png?id=179', 'https://i.imgur.com/YfJQV5z.png?id=180', 288, 'fef142c4-004a-4f49-b048-91fd567a6e18');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('315833b2-c358-48d2-973f-a3dcd89dbb4d', 'https://i.imgur.com/YfJQV5z.png?id=183', 'https://i.imgur.com/YfJQV5z.png?id=184', 644, '4f44c448-4143-4917-9627-fcf984c513aa');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('3ae5089e-ee47-4b43-ba93-a54df1eb8ab5', 'https://i.imgur.com/YfJQV5z.png?id=187', 'https://i.imgur.com/YfJQV5z.png?id=188', 721, '1acd7be3-6e8e-4ab2-aad6-f1c316f8a4e8');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('a36f08c3-e1e7-4701-901f-28532855a0a9', 'https://i.imgur.com/YfJQV5z.png?id=191', 'https://i.imgur.com/YfJQV5z.png?id=192', 182, '72888b50-f3cd-4111-93b5-79dc6b1c3959');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('198c54b6-fbfa-49c6-9746-042f0a4f7653', 'https://i.imgur.com/YfJQV5z.png?id=195', 'https://i.imgur.com/YfJQV5z.png?id=196', 342, '61fdac5e-6847-4a89-9732-38bfc67a7b93');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('97719b67-3c73-4aeb-9d95-7fed0abdf488', 'https://i.imgur.com/YfJQV5z.png?id=199', 'https://i.imgur.com/YfJQV5z.png?id=200', 228, '2cc4fae9-fee7-4e9f-8e95-0f34d3517d55');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('54ad2f71-af2b-48fc-8de2-12e79e9ec853', 'https://i.imgur.com/YfJQV5z.png?id=203', 'https://i.imgur.com/YfJQV5z.png?id=204', 40, '1acd7be3-6e8e-4ab2-aad6-f1c316f8a4e8');
INSERT INTO "PredictionImage" ("id", "imageUrl", "imageType", "fileSize", "predictionId") VALUES ('f7755412-15a4-4bab-be86-674203497a52', 'https://i.imgur.com/YfJQV5z.png?id=207', 'https://i.imgur.com/YfJQV5z.png?id=208', 770, '0da53c2f-3448-4be9-a3e8-1e7c59af1808');

INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('fc977e88-d225-4d78-a3a7-07b1cdf6ef64', 'error_message', 'Welcome to ElectroATOM', '7715f842-6c9a-459a-8d29-4242caa0f7e9');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('776f30d0-fb87-4884-afd5-3b78bd4f6718', 'welcome_message', 'Welcome to ElectroATOM', '7715f842-6c9a-459a-8d29-4242caa0f7e9');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('7193801d-8ffe-4bf0-b707-cc4d418d9ebe', 'login_prompt', 'Create a prediction', '1a6291d3-7f42-4fdb-b395-fc773260a3bc');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('5cbefbe6-7bac-423a-9dbb-0e531b13c606', 'error_message', 'An error has occurred. Please try again.', '15b76720-92c7-47df-bb9c-20c193d6ec7d');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('95a50358-4d22-45b5-aa7b-545f2497ea3b', 'welcome_message', 'Welcome to ElectroATOM', 'b14c764f-72b5-48be-b41d-d51af54cfa4b');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('ce2a26c9-9283-4a95-8781-5264cdadb0d2', 'login_prompt', 'Are you sure you want to log out', 'b14c764f-72b5-48be-b41d-d51af54cfa4b');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('d4138844-8c19-47c9-93b7-89346e4743ed', 'error_message', 'Create a prediction', '7715f842-6c9a-459a-8d29-4242caa0f7e9');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('ce119ab4-4be0-45c0-bbbb-b9eb0ee3b84a', 'login_prompt', 'Create a prediction', '1a6291d3-7f42-4fdb-b395-fc773260a3bc');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('94a657f6-0443-4f4f-a71c-d6af45c5bd75', 'prediction_button', 'Please enter your credentials to log in.', 'b14c764f-72b5-48be-b41d-d51af54cfa4b');
INSERT INTO "Translation" ("id", "key", "value", "languageId") VALUES ('c572be33-a352-4ae1-8381-bd8dcb68c5ce', 'prediction_button', 'Create a prediction', '1a6291d3-7f42-4fdb-b395-fc773260a3bc');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
