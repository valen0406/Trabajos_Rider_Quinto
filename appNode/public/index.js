// document.addEventListener('DOMContentLoaded', () => {
//     const tableBody = document.querySelector('#productsTable tbody');
//     const reloadBtn = document.querySelector('#reloadbtn');
//     const statusMessage = document.querySelector('#statusMessage');
    
//     //Funcion para formatear la fecha
//     const formatDate = (dateString) => {
//         const options = {
//             year: 'numeric',
//             month: 'short',
//             day: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//         };
//         return new Date(dateString).toLocaleString('es-ES', options);
//     };

//     const formatPrice = (price) => {
//         if (price === null || price === undefined) return '0.00';

//         if (typeof price === 'number') {
//             return price.toFixed(2);
//         }
//         const numericValue = parseFloat(price);
//         return isNaN(numericValue) ? '0.00' : numericValue.toFixed(2);
//     };

//     const showError = (message) => {
//         statusMessage.innerHTML = `
//         <div class="error-message">
//         ${message}
//         </div>
//         `;
//         tableBody.innerHTML = `
//         <tr>
//             <td colspan="5">Error al cargar datos</td>
//         </tr>
//         `;
//     };

//     const loadData = async () => {
//         try {
//             statusMessage.innerHTML = '<div class="loading-message">Cargando...</div>';

//             const response = await fetch('/api/products');
            
//             if (!response.ok) {
//                 throw new Error(`Error HTTP: ${response.status}`);
//             }
//             const result = await response.json();

//             if (!result.success) {
//                 throw new Error(result.message || 'Error en los datos recibidos');
//             }

//             if (result.data.length === 0) {
//                 tableBody.innerHTML = `
//                 <tr>
//                 <td colspan="5">No hay datos disponibles</td>
//                 </tr>
//                 `;
//                 statusMessage.innerHTML = '<div class="info-message">No hay productos</div>';
//                 return;
//             }
//             tableBody.innerHTML = result.data.map((product) =>`
//                 <tr>
//                 <td>${product.id}</td>
//                 <td>${product.nombre}</td>
//                 <td>${formatPrice(product.precio)}</td>
//                 <td>${product.stock ?? 'N/A'}</td>
//                 <td>${product.created_at ? formatDate(product.created_at): 'N/A'}</td>
//                 </tr>
//             `).join('');
//             statusMessage.innerHTML = `
//             <div class="success-message">
//             Datos cargados correctamente
//             </div>
//             `;
//         } catch (error) {
//             console.error('error al cargar datos:', error);
//             showError(`Error: ${error.message}`);
//         }
//     };

//     reloadBtn.addEventListener('click', loadData);
//     loadData();
// })