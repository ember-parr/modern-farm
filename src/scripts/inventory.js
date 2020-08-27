import { foodTotals } from "./catalog.js";

export const inventoryList = (taco) => {
  let totalOfEachFood = foodTotals();
  console.log(totalOfEachFood);

  let tableHTMLrepresentation = "";
  tableHTMLrepresentation += `
            <table>
                <tr>
                    <th> Crop: </th>
                    <th> # Harvested: </th>
                </tr>
                <tr>
                    <td> Asparagus: </td>
                    <td> ${totalOfEachFood.asparagus} </td>
                </tr>
                <tr>
                    <td> Corn: </td>
                    <td> ${totalOfEachFood.corn} </td>
                </tr>
                <tr>
                    <td> Potato: </td>
                    <td> ${totalOfEachFood.potato} </td>
                </tr>
                <tr>
                    <td> Soybean: </td>
                    <td> ${totalOfEachFood.soybean} </td>
                </tr>
                <tr>
                    <td> Sunflower: </td>
                    <td> ${totalOfEachFood.sunflower} </td>
                </tr>
                <tr>
                    <td> Wheat: </td>
                    <td> ${totalOfEachFood.wheat} </td>
                </tr>
                    
                    
                    

            </table>
        `;

  return tableHTMLrepresentation;
};
