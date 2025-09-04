import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces para organizar os dados
interface Education {
  course: string;
  institution: string;
  period: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class Profile {
  // Dados do perfil principal
  fullName = 'GUILHERME DOS ANJOS MACEDO';
  email = 'guilherme.macedo1598@gmail.com';
  githubUrl = 'https://github.com/Guilherme-dev15'; 
  linkedinUrl = 'https://www.linkedin.com/in/guilherme-a-anjos//'; 
  aboutText = `Desenvolvedor Full Stack Júnior com experiência em React.js, Node.js, TypeScript e APIs REST. Graduado em Análise e Desenvolvimento de Sistemas, estou em transição da área de suporte e infraestrutura, trazendo uma visão sistêmica de TI e forte capacidade de resolução de problemas. Busco crescer em um ambiente colaborativo, entregando soluções modernas e eficientes.`;

  // Dados de Formação
  educationHistory: Education[] = [
    {
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Cidade de São Paulo - UNICID',
      period: 'Concluído em 2019',
    },
    {
      course: 'Desenvolvimento Web',
      institution: 'Dev em Dobro',
      period: 'JavaScript, React, Node.js, Express, Docker',
    },
    {
      course: 'Formação JavaScript Developer',
      institution: 'DIO',
      period: 'Concluído em 2023',
    },
  ];

  // Dados de Experiência Profissional
  professionalExperience: Experience[] = [
    {
      company: 'Pashal Locadora de Equipamentos',
      role: 'Assistente de Infraestrutura de TI',
      period: 'Jul/2023 - Atual',
      description: 'Atendimento técnico via Zendesk, suporte a servidores, VPN e administração de usuários em Active Directory e Office 365.'
    },
    {
      company: 'Brint Comércio e Indústria',
      role: 'Analista de Suporte Técnico',
      period: 'Dez/2021 - Nov/2022',
      description: 'Suporte a sistemas WMS/WCS com Oracle e PostgreSQL, configuração de VPNs e gestão de acessos no AD e Azure AD.'
    },
    {
      company: '14° Cartório da Lapa',
      role: 'Auxiliar Administrativo - Suporte Interno',
      period: 'Set/2019 - Dez/2021',
      description: 'Suporte local para 30 usuários, gestão de ativos de TI, backup de documentos e manutenção de certificados digitais.'
    }
  ];
}