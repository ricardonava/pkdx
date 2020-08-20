export default function makeEvolutionsChain(data) {
  const evoChain = [];
  let evoData = data.chain;

  do {
    const numberOfEvolutions = evoData['evolves_to'].length;
    evoChain.push({
      species_name: evoData.species.name
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name
        });
      }
    }

    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  return evoChain;
}
