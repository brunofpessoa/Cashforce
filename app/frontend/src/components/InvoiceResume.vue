<script>
export default {
  data() {
    return {
      nfs: null,
      loading: false,
      error: null,
      status: ['Pendente de confirmação', 'Pedido confirmado', 'Não reconhece o pedido', 'Mercadoria não recebida', 'Recebida com avaria', 'Devolvida', 'Recebida com devolução parcial', 'Recebida e confirmada', 'Pagamento Autorizado'],
    }
  },
  methods: {
    formatData(nfs) {
      nfs.forEach((nf) => {
        nf.value = (nf.value / 100).toLocaleString('pt-BR', {minimumFractionDigits: 2});
        nf.emissionDate = new Date(nf.emissionDate).toLocaleDateString('pt-BR');
        nf.status = this.status[nf.orderStatusBuyer];
      });
      return nfs;
    },
    async getInvoices() {
      this.loading = true;
      try {
        const data = await fetch('http://localhost:3000/');
        const nfs = await data.json();

        this.nfs = this.formatData(nfs);
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.getInvoices();
  }
}
</script>


<template>
  <div class="px-5 pt-5">
    <div class="d-flex">
      <img src="../assets/icons/handshake-blue.svg" alt="aperto de mãos" />
      <h1 class="title text-d-blue mx-1">Notas fiscais</h1>
    </div>
    <p class="text-darkish fs-l">Visualize as notas fiscais que você tem.</p>
    <p v-if="loading" class="mt-3">Carregando...</p>
    <p v-else-if="error" class="mt-3">Algo deu errado, tente novamente mais tarde.</p>
    <p v-else-if="nfs.length < 1" class="mt-3">
      Você ainda não possui nenhuma nota fiscal.
    </p>
    <table v-else class="table table-borderless text-center">
      <thead>
        <tr>
          <th>NOTA FISCAL</th>
          <th>SACADO</th>
          <th>CEDENTE</th>
          <th>EMISSÃO</th>
          <th>VALOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="nf in nfs" v-bind:key="nf.nNf">
          <td> {{ nf.nNf }} </td>
          <td> {{ nf.buyer.name }} </td>
          <td> {{ nf.provider.name }} </td>
          <td> {{ nf.emissionDate }} </td>
          <td> R$ {{ nf.value }} </td>
          <td> {{ nf.status }} </td>
          <td>
            <button>Dados do cedente</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>