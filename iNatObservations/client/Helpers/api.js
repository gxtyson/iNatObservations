// import axios from "axios";

// export const fetchObservationTaxonName = async () => {
//   try {
//     const { data } = await axios.get(
//       "https://api.inaturalist.org/v1/observations"
//     );
//     const resultArray = data.results;
//     const taxon = resultArray.map((x) => x.taxon);
//     const filteredTaxon = taxon.filter(Boolean);
//     const taxonName = filteredTaxon.map((y) => y.name);
//     const filteredTaxonName = taxonName.filter(Boolean);
//     console.log(filteredTaxonName);

//     return filteredTaxonName;
//   } catch (error) {
//     console.error(error);
//   }
// };
