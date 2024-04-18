import { Pool } from "pg";

// interface Pokemon {
//   nome: string;
//   imagem: string;
// }

class PokemonDatabase {
  private pool: Pool;

  constructor() {
    // Configuração da conexão com o banco de dados
    this.pool = new Pool({
      user: "postgres",
      host: "postgres",
      database: "pokemon",
      password: "postgrespassword",
      port: 5432,
    });
  }

  async inserirPokemon(
    id: string,
    nome: string,
    imagem: string
  ): Promise<boolean> {
    const query = "INSERT INTO pokemon (id, nome, imagem) VALUES ($1, $2, $3)";
    const values = [id, nome, imagem];

    try {
      const client = await this.pool.connect();
      await client.query(query, values);
      client.release();
      console.log(`Pokémon ${nome} inserido com sucesso.`);
      return true; // Indica que a inserção foi bem-sucedida
    } catch (err) {
      console.error("Erro ao inserir Pokémon:", err);
      return false; // Indica que ocorreu um erro durante a inserção
    }
  }
}

export default PokemonDatabase;
