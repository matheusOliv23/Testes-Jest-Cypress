const Cliente = require("../../models/cliente");

describe("Clientes", () => {
  beforeEach(async () => {
    //beforeEach é a função que sera executada antes de todas as outras
  });

  it("Valida propriedades de um cliente", async () => {
    let cliente = Cliente.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
    // espera-se que as propriedades id, nome e telefone não sejam indefinidas
  });

  it("Nome do cliente maiusculo", async () => {
    let clientes = Cliente.todos();
    expect(clientes.length).toEqual(10);
    //esse teste espera que a quantidade de clientes seja igual a 10
  });

  it("Nome do cliente maiusculo", async () => {
    let cliente = Cliente.primeiro();
    cliente.nome = "matheus";
    expect(cliente.nomeUppercase()).toEqual("MATHEUS");
    //esse teste espera que retorne em maisculo o nome do cliente Matheus
  });
});
