class Veiculo {
  #diaria;

  constructor(marca, modelo, diaria) {
    this.marca = marca;
    this.modelo = modelo;
    this.#diaria = diaria;
  }

  getDiaria() {
    return this.#diaria;
  }

  descricao() {
    return `${this.marca} ${this.modelo} — Diária base: R$ ${this.#diaria.toFixed(2)}`;
  }

  calcularAluguel(dias) {
    return this.#diaria * dias;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, diaria, portas) {
    super(marca, modelo, diaria);
    this.portas = portas;
  }

  descricao() {
    return `Carro: ${this.marca} ${this.modelo} (${this.portas} portas) — Diária: R$ ${this.getDiaria().toFixed(2)}`;
  }

  calcularAluguel(dias) {
    // Acréscimo de 10% sobre o valor base para carros
    return super.calcularAluguel(dias) * 1.10;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, diaria, cilindradas) {
    super(marca, modelo, diaria);
    this.cilindradas = cilindradas;
  }

  descricao() {
    return `Moto: ${this.marca} ${this.modelo} (${this.cilindradas}cc) — Diária: R$ ${this.getDiaria().toFixed(2)}`;
  }

  calcularAluguel(dias) {
    // Desconto de 10% sobre o valor base para motos
    return super.calcularAluguel(dias) * 0.90;
  }
}

class Locadora {
  constructor() {
    this.veiculos = [];
  }

  adicionarVeiculo(veiculo) {
    this.veiculos.push(veiculo);
  }

  removerVeiculo(modelo) {
    const tamanhoInicial = this.veiculos.length;
    this.veiculos = this.veiculos.filter(
      (v) => v.modelo.toLowerCase() !== modelo.toLowerCase()
    );

    if (this.veiculos.length < tamanhoInicial) {
      console.log(`Veículo de modelo "${modelo}" removido com sucesso.`);
    } else {
      console.log(`Nenhum veículo de modelo "${modelo}" encontrado.`);
    }
  }

  listarVeiculos() {
    console.log("=== VEÍCULOS DISPONÍVEIS ===");
    if (this.veiculos.length === 0) {
      console.log("Nenhum veículo cadastrado.");
      return;
    }

    this.veiculos.forEach((veiculo, index) => {
      console.log(`${index + 1}. ${veiculo.descricao()}`);
    });
  }

  calcularTotal(dias) {
    return this.veiculos.reduce(
      (total, veiculo) => total + veiculo.calcularAluguel(dias),
      0
    );
  }
}

// --- Teste do sistema ---
const locadora = new Locadora();
const carro = new Carro("Hyundai", "HB20", 120, 4);
const moto = new Moto("Yamaha", "MT-03", 90, 321);

locadora.adicionarVeiculo(carro);
locadora.adicionarVeiculo(moto);

locadora.listarVeiculos();

const dias = 3;
console.log(`\n=== ALUGUEL POR ${dias} DIAS ===`);
console.log(`${carro.marca} ${carro.modelo}: R$ ${carro.calcularAluguel(dias).toFixed(2)}`);
console.log(`${moto.marca} ${moto.modelo}: R$ ${moto.calcularAluguel(dias).toFixed(2)}`);
console.log(`Valor total da locadora (${dias} dias): R$ ${locadora.calcularTotal(dias).toFixed(2)}`);

// Teste do desafio extra: removerVeiculo(modelo)
console.log("\n=== TESTE REMOVER VEÍCULO ===");
locadora.removerVeiculo("MT-03");
locadora.listarVeiculos();

