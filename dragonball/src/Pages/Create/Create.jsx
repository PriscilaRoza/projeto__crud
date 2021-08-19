import * as S from './styled'
import { Title } from '../../components/Title';




export default function Create() {
    return (
        <>
            <Title>Criar um novo Personagem</Title>
            <S.Form>
                <S.Label for="name">Nome</S.Label>
                <S.Input id="name" type="text"></S.Input>

                <S.Label>URL da Imagem</S.Label>
                <S.Input type="text"></S.Input>

                <S.Label>Raça</S.Label>
                <S.Select>
                    <option value="" hidden>-</option>
                    <option value="Androide">Androide</option>
                    <option value="Animal">Animal</option>
                    <option value="Dragão">Dragão</option>
                    <option value="Humano">Humano</option>
                    <option value="Shin-jin">Shin-jin</option>
                    <option value="Majin">Majin</option>
                    <option value="Namekuseijin">Namekuseijin</option>
                    <option value="Ogro">Ogro</option>
                    <option value="Changeller">Changeller</option>
                    <option value="Saiyajin">Saiyajin</option>
                    <option value="Tsufurujin">Tsufurujin</option>
                </S.Select>

                <S.Label>Saga</S.Label>
                <S.Select>
                    <option value="" hidden>-</option>
                    <option value="Pilaf">Pilaf</option>
                    <option value="21º Torneio">21º Torneio</option>
                    <option value="Red Ribbon">Red Ribbon</option>
                    <option value="General Blue">General Blue</option>
                    <option value="Comandante Red">Comandante Red</option>
                    <option value="Vovó Uranai">Vovó Uranai</option>
                    <option value="Tenshinhan">Tenshinhan</option>
                    <option value="Piccolo Daimaoh">Piccolo Daimaoh</option>
                    <option value="piccolo Jr">piccolo Jr</option>
                    <option value="Sayajins">Sayajins</option>
                    <option value="Freeza">Freeza</option>
                    <option value="Garlic">Garlic</option>
                    <option value="Cell">Cell</option>
                    <option value="Torneio do Outro Mundo">Torneio do Outro Mundo</option>
                    <option value="Majin Boo">Majin Boo</option>
                </S.Select>

                <S.Label>Poder de Luta</S.Label>
                <S.Input type="number" min="0"></S.Input>

                <S.Button>Cadastrar</S.Button>
             </S.Form>
        </>
    )
}