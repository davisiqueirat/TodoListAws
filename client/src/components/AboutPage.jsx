import React from 'react';
import { Link } from 'react-router-dom';
import './aboutPageStyles.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">Sobre nós</h1>
            <p className="about-content">
                Essa aplicação foi criada com o objetivo de ser uma lista de tarefas onde você consegue adicionar, excluir e marcar como concluída uma tarefa.
            </p>
            <h2 className="about-subtitle">Equipe</h2>
            <ul className="about-team">
                <li>Davi Siqueira de Carvalho Torres </li>
                <li>Ramon Freire Mariz de França </li>
                <li>Daniel Figueiredo Melo </li>
                <li>Victor Fernando Carvalho de Lima </li>
                <li>Gabriel Duarte Freitas </li>
                <li>João Gabriel dos Santos </li>
                
            </ul>
            <div className="about-github">
                <p>Link do repositório no GitHub:</p>
                <a href="https://github.com/davisiqueirat/TodoListAws">GitHub</a>
            </div>
            <Link to="/" className="back-link">Voltar para a pagina inicial</Link>
        </div>
    );
};

export default AboutPage