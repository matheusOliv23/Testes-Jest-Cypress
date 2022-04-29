module.exports = class Cliente {
  constructor(id = 0, nome = "", telefone = "") {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
  }

  nomeUppercase() {
    return this.nome.toUpperCase();
  }

  static primeiro() {
    return new Cliente();
  }

  static todos() {
    return [
      new Cliente(1, "Matheus", "123456"),
      new Cliente(2, "Caio", "123456"),
      new Cliente(3, "Jose", "123456"),
      new Cliente(4, "Maria", "123456"),
      new Cliente(5, "Fernando", "123456"),
      new Cliente(6, "Gustavo", "123456"),
      new Cliente(7, "Carlos", "123456"),
      new Cliente(8, "Augusto", "123456"),
      new Cliente(9, "Luciane", "123456"),
      new Cliente(10, "Roberto", "123456"),
    ];
  }
};
