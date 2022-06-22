const stringAcordando = () =>  'Acordando!!';

const stringBoraCafe = () => 'Bora tomar café!!';


const stringPartiu = () => 'Partiu Dormir!!';

const doinThings = (fc) => {
    const result = fc();
    console.log(result);
}  

doinThings(stringAcordando);
doinThings(stringBoraCafe);
doinThings(stringPartiu);