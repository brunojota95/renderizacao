export async function getStaticProps() {
  console.log('[Server] gerando props para o componente...');
  const resp = await fetch('http://localhost:3000/api/produtos');
  const produtos = await resp.json();
  return {
    props: {
      produtos,
    },
  };
}

export default function Estatico4(props) {
  console.log('[Cliente] renderizando o componente...');
  function renderizarProdutos() {
    return props.produtos.map((prod) => {
      return (
        <li key={prod.id}>
          {prod.id} - {prod.nome} tem preco de {prod.preco}€
        </li>
      );
    });
  }
  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
