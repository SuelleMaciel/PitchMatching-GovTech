export interface Demanda {
  id: string; 
  titulo: string;
  categoria: string;
  orgao: string;
  prazo: number; 
  valor: number; 
  status: 'Em Análise' | 'Aberto' | 'Concluído';
}

export const mockDemandas: Demanda[] = [
  {
    id: 'DM-001',
    titulo: 'Monitoramento Inteligente de Vacinas',
    categoria: 'SAÚDE',
    orgao: 'Secretaria Municipal de Saúde - São Luís',
    prazo: 30,
    valor: 150000,
    status: 'Aberto'
  },
  {
    id: 'DM-002',
    titulo: 'Sistema de Gestão de Merenda Escolar',
    categoria: 'EDUCAÇÃO',
    orgao: 'Secretaria Estadual de Educação',
    prazo: 45,
    valor: 200000,
    status: 'Aberto'
  },
  {
    id: 'DM-003',
    titulo: 'Modernização do atendimento cidadão',
    categoria: 'GESTÃO',
    orgao: 'Secretaria de Administração',
    prazo: 60,
    valor: 80000,
    status: 'Em Análise'
  },
  {
    id: 'DM-004',
    titulo: "Monitoramento de casos de Dengue",
    categoria: "SAÚDE",
    orgao: "Secretaria Municipal de Saúde",
    prazo: 70,
    valor: 250000,
    status: 'Concluído'
    }
];