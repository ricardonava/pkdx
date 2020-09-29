/* eslint-disable prefer-destructuring */
export default function makeEvolutionsChain(data) {
  const evoChain = [];
  let evoData = data.chain;

  do {
    const numberOfEvolutions = evoData.evolves_to.length;
    evoChain.push({
      species_name: evoData.species.name.replace(/^\w/, (c) => c.toUpperCase())
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i += 1) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name.replace(/^\w/, (c) =>
            c.toUpperCase()
          )
        });
      }
    }

    evoData = evoData.evolves_to[0];
  } while (
    !!evoData &&
    Object.prototype.hasOwnProperty.call(evoData, 'evolves_to')
  );
  return evoChain;
}
