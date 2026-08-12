class Filme {
    constructor(id, nome, genero,ano, diretor, duracao,  posicaoNaLista) {
        this.id = id;
        this.nome = nome;
         this.genero = genero;
         this.ano = ano;
         this.diretor = diretor;
         this.duracao = duracao;
      

        this.posicaoNaLista = posicaoNaLista; //atributo para facilitar a alteração e exclusão 
    }
}