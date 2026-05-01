import styles from './VitrineHome.module.css';
import { FilterBar } from './Components/FilterBar'
import { SearchBar } from './Components/SearchBar';
import { DemandaGrid, type Demanda } from './Components/DemandaGrid'; 

export function VitrineHome() {

    const listaDeDemandas: Demanda[] = [
    {
      id: 1,
      categoria: "SAÚDE",
      titulo: "Monitoramento Inteligente de Vacinas",
      orgao: "Secretaria Municipal de Saúde - São Luís",
      prazo: 30,
      valor: 150000
    },
    {
      id: 2,
      categoria: "EDUCAÇÃO",
      titulo: "Sistema de Gestão de Merenda Escolar",
      orgao: "Secretaria Estadual de Educação",
      prazo: 45,
      valor: 200000
    },
    {
      id: 3,
      categoria: "MEIO AMBIENTE",
      titulo: "Monitoramento de Queimadas em Tempo Real",
      orgao: "SEMAPA - Imperatriz",
      prazo: 60,
      valor: 300000
    },
    {
        id:4,
        categoria: "SAÚDE",
        titulo: "Monitoramento de casos de Dengue",
        orgao: "Secretaria Municipal de Saúde",
        prazo: 70,
        valor: 250000
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Plataforma Aberta de Inovação Pública</h1>
        <p>Conectando os desafios do setor público às melhores soluções tecnológicas do Maranhão.</p>
        <div className={styles.buscaContainer}>
          <SearchBar />
        </div>
      </header>

      <main className={styles.conteudo}>
        <FilterBar />
        <DemandaGrid demandas={listaDeDemandas} />
      </main>
    </div>
  );
}