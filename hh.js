// json2html.js

export default function json2html(data) {
  // Define table headers
  const headers = ['Name', 'Age', 'Gender'];

  // Initialize the HTML table string with the specified data-user attribute
  let html = '<table data-user="tharunmandapati5@gmail.com">';
  html += '<thead><tr>';

  // Add table headers
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });

  html += '</tr></thead>';
  html += '<tbody>';

  // Loop through each object in the data array and create table rows
  data.forEach(item => {
    html += '<tr>';
    html += `<td>${item.Name}</td>`;
    html += `<td>${item.Age}</td>`;
    html += `<td>${item.Gender || ''}</td>`; // Use an empty string if 'Gender' is not present
    html += '</tr>';
  });

  // Close table tags
  html += '</tbody></table>';

  return html;
}
