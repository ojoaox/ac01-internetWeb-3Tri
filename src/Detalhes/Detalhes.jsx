export default function Detalhes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-850 text-white">
        <div>
          <h1 className="text-6xl font-bold mb-10">Detalhes</h1>
        </div>
        <div className="flex justify-around mx-10 gap-20 mt-10">
          <div className="detalheLargada h-[50%] w-[50%] flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Projeto 1 - Luzes de Largada
            </h2>
            <p className="text-justify text-xl">
              Essa ferramenta simula o famoso semáforo de largada de corridas.
              As luzes vão acendendo uma a uma durante a contagem regressiva,
              criando suspense para o início do jogo. Quando todas as luzes
              acendem, a última muda para verde, indicando que os jogadores
              podem reagir e começar a apertar seus botões.
            </p>
          </div>
          <div className="detalheReflexo h-[50%] w-[50%] flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Projeto 2 - Jogo de Reflexo
            </h2>
            <p className="text-justify text-xl">
              Essa ferramenta testa a velocidade de reação dos jogadores. Assim
              que a luz verde acende, os jogadores devem apertar seu respectivo
              botão o mais rápido possível. O primeiro a clicar corretamente
              vence a rodada, e a pontuação é atualizada automaticamente. O jogo
              permite iniciar novas rodadas e também reiniciar a pontuação
              total.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
