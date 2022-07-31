"use strict";
const ingredientList = [
  { id: "6d7c97ae-2a8a-463d-b2a1-d90e0e9db969", name: "apple" },
  { id: "6a002c66-594a-4d59-8110-f60ecd12fe04", name: "appam" },
  { id: "f9f273e2-d5b4-4ecc-9820-9526df8374b2", name: "aperol" },
  { id: "a36d519a-91f0-4843-a708-fee851675d03", name: "aprium" },
  { id: "4686e37b-3d3a-4707-8efd-58ef2eb9641e", name: "apricot" },
  { id: "d54a2899-bc5a-4631-8868-9e53844dbb31", name: "appadam" },
  { id: "92299be0-013b-44b7-9808-0650d22a6f6a", name: "applepear" },
  { id: "2cdcfb10-fbc0-45a4-b77e-e76c5891e584", name: "appletini" },
  { id: "ccbbd7a4-f4c6-4904-939b-248e80cb9996", name: "applejacks" },
  { id: "b65a6a96-d9f1-4115-bb40-5224829dcb82", name: "applejuice" },
  { id: "68069277-64d0-4eab-8782-648bdff72ce5", name: "applesauce" },
  { id: "e0360672-3288-4bef-9eff-eedf0cb6bad8", name: "applebutter" },
  { id: "1dd7dd42-52ef-4c1d-bb8e-fc55f5208bf7", name: "salt" },
  { id: "426a80ce-2bbf-4876-bcde-3f61271dcbb1", name: "sake" },
  { id: "754dd094-175f-484f-b93f-a39d41bdce6f", name: "shake" },
  { id: "3b702b4b-5d62-44f1-ab33-18b3b79c335d", name: "sauce" },
  { id: "808d805a-3b14-472e-b284-1e616fd37afd", name: "salsa" },
  { id: "3acc2154-eca7-4042-9180-54c42237807f", name: "scone" },
  { id: "065e7c28-8570-4408-90a2-81bd665af493", name: "samosa" },
  { id: "b3bb3a64-1f7a-4018-ab2c-dae62ef6f7a2", name: "salade" },
  { id: "cc41160a-3bf1-4315-83e7-bf3b05055b49", name: "salmon" },
  { id: "91851ebd-cf90-4f20-a12a-32ed73076cc3", name: "salami" },
  { id: "af092026-a249-4ff2-bd51-fce9c9035a9a", name: "sub" },
  { id: "abc39251-2e72-4697-949b-f0b492d280a0", name: "suet" },
  { id: "89eb8e94-6ee8-4097-9e30-64c5cf147715", name: "sushi" },
  { id: "2151d321-7fb2-4733-bbb1-e5ea503f2e82", name: "sugar" },
  { id: "3667ca5b-bfa6-4d5b-a45b-8b44165507b5", name: "sumac" },
  { id: "261081a5-ced3-4a40-8f1b-22d3abbd87f0", name: "sundae" },
  { id: "07502fee-a460-4a74-bb4f-4e3db431c97d", name: "subway" },
  { id: "e8f8a470-f8a0-4ba6-8677-b357c597d1d1", name: "supper" },
  { id: "182f69f5-9cba-4925-86a2-737eb77a8178", name: "sunfish" },
  { id: "77c46cf5-3a7f-41ac-872c-5bb12b5ac4d5", name: "sunchip" },
  { id: "5f086484-728f-4a7f-9653-c6b794f6e2af", name: "raw sugar" },
  { id: "cad312a3-bd1d-4205-b4ff-9ab83d31be01", name: "sugar peas" },
  { id: "1eed21fe-17ac-43cb-bdf6-c5bc67f10ff6", name: "palm sugar" },
  { id: "66638781-f29f-4222-aa80-e11d3b14d6b6", name: "sugar cube" },
  { id: "da5a0ef0-d010-4202-929d-28b4cfad2a24", name: "cane sugar" },
  { id: "afb91924-32a3-46dc-826c-2f5bef4ce017", name: "white sugar" },
  { id: "ea852e96-da0f-4019-82ac-9944b62d5d26", name: "maple sugar" },
  { id: "a6b68b6c-c081-4030-8ef2-98decfeca3d9", name: "brown sugar" },
  { id: "b6d8f48e-8efa-49dd-a1ac-018135ad33b2", name: "icing sugar" },
  { id: "9fd5700b-bb85-45d7-868e-4d1735b5e784", name: "fig" },
  { id: "0d4fb387-26d1-4454-a28e-56d9b47fb4d2", name: "feta" },
  { id: "309fac56-5740-449c-9f9e-da7d6c512eaf", name: "fish" },
  { id: "65349a4e-fa7b-4e54-aafb-062b8fbd8875", name: "flan" },
  { id: "ed945398-d93f-434a-a8d9-0e4870fcc82d", name: "flax" },
  { id: "7b8a69ab-0de2-4022-b462-4455a599d5b9", name: "fries" },
  { id: "83c8396c-3d65-4dae-885a-f17bb958374c", name: "flour" },
  { id: "481f9f1a-6571-4492-9f7b-76ac32464eb9", name: "filet" },
  { id: "b97f2d12-0b6c-40d4-a199-d31750c407ec", name: "farro" },
  { id: "160cc3bf-56fa-458d-9c83-9252b6dbdaee", name: "fanta" },
  { id: "667f7508-f8a3-488c-a107-09d998d4b098", name: "flips" },
  { id: "abdd5946-f26f-46ca-9ed5-88954baba7a7", name: "flauta" },
  { id: "b1b62105-2a09-4064-8a06-05ae2781181c", name: "flagel" },
  { id: "435344b0-9d99-4719-aaad-bf310381ba7a", name: "flapjack" },
  { id: "f304fbb2-bed7-46f0-b3f3-82b289ae55d8", name: "flatbread" },
  { id: "777a4cfa-716a-4361-bd7e-1639df4d8566", name: "flageolet" },
  { id: "914b986d-fe4f-4bd9-8666-6b72449d3568", name: "flounder" },
  { id: "d6dc6743-4585-4d77-ab0d-f7a032278a65", name: "rye flour" },
  { id: "390c61ef-0943-4bf5-a6d1-eed72fd068da", name: "flognarde" },
  { id: "d852c062-a2a8-46e6-b64a-ba255518ff11", name: "florentine" },
  { id: "70a6bf7f-396b-4226-b4ea-1aea2f7a9f38", name: "rice flour" },
  { id: "debcec06-f6d6-492a-9456-db9875940a41", name: "bread flour" },
  { id: "3c42ec26-4380-43b2-b66c-111b11b7ab05", name: "spelt flour" },
  { id: "a2eefd65-e598-4f59-90ba-828d16b1e65e", name: "white flour" },
  { id: "8f01fa59-364e-4b91-b712-6613e7d1e6d8", name: "almond flour" },
  { id: "3f9a3d64-a081-4ab7-aa9e-266a864a0ff0", name: "soy flour" },
  { id: "2c0ced4e-077d-4e1c-9326-75c54f17ae83", name: "egg" },
  { id: "03e41e9a-6dbd-4fe8-84b1-5170ec746010", name: "evoo" },
  { id: "1952a2d1-1718-4f2e-931e-df74f49494b1", name: "eggo" },
  { id: "350901d0-a22c-4b1a-aa27-a9a4d2cabd74", name: "equal" },
  { id: "e92817ce-4510-4b6c-a812-2a69d636607b", name: "ensure" },
  { id: "3d7c6866-a9b1-419a-b327-cd81f70af700", name: "eggnog" },
  { id: "7a319714-05bc-4e2b-b275-cb486602a463", name: "edamame" },
  { id: "b5d6e38d-51bb-473d-a689-07ba2456e132", name: "eggnog" },
  { id: "6cfdd05f-f633-4f20-bc71-7c88d3719e6e", name: "eggroll" },
  { id: "2f4a2137-3121-4968-8fd7-ae2e3b17e8b8", name: "eggbake" },
  { id: "0b2656dd-8d93-44ac-b2a1-413d1db0b244", name: "eggplant" },
  { id: "9099cd1a-fe8b-4867-a4e6-b7a46783e680", name: "eggwhite" },
  { id: "2c744a6e-bee1-4bc2-a027-e0906129f123", name: "eggbeater" },
  { id: "3136d51d-ec25-4963-813e-2f5545991a04", name: "dove eggs" },
];
module.exports = {
  up: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    const ingredients = ingredientList.map(({ id, name }) => ({
      id,
      name,
      UOM: "gram",
      nutritionMeta: JSON.stringify({
        calories: 0,
        fats: 0,
        protein: 0,
        cabs: 0,
        sodium: 0,
        type: "Uncategorised",
      }),
      createdBy: "SEEDED",
      updatedBy: "SEEDED",
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    try {
      await queryInterface.bulkInsert("ingredients", ingredients, {
        transaction,
      });
      transaction.commit();
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      throw error;
    }
  },
  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete("ingredients", null, { transaction }); // eslint-disable-line unicorn/no-null
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};