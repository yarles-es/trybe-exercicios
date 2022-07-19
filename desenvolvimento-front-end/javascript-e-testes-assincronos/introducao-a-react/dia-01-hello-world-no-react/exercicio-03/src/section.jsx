import React from "react";

const lista = [
{
    nome: 'Yarles de Andrade Espirito Santo',
    idade: 26,
    estado: 'Espirito Santo',
    cidade: 'Laranja da Terra'
},
{
    nome: 'Lusinete Moreira de Andrade ',
    idade: 57,
    estado: 'Espirito Santo',
    cidade: 'Laranja da Terra'
},
{
    nome: 'Vanderlei do Espirito Santo',
    idade: 51,
    estado: 'Espirito Santo',
    cidade: 'Santa Rosa'
},
{
    nome: 'Davi Moreira de Andrade',
    idade: 26,
    estado: 'Espirito Santo',
    cidade: 'Pancas'
}
]
class Section extends React.Component {
    render() {
        return(
            <section className='teste'>
                {lista.map(({ nome, idade, estado, cidade }) => (
                    <div className = 'lista' >
                        <h4 className='nome'>{`Nome: ${nome}`}</h4>
                        <p className='texto'>{`Minha idade é: ${idade}`}</p>
                        <p className='texto'>
                        {`Moro no estado do ${estado}.
                        Resido na cidade ${cidade}.`}
                        </p>
                    </div>
                ))}
            </section>
        );
    }
}

export default Section;