<script>
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product-item'); // Adjust this selector as per your HTML structure
            const productId = product.dataset.id; // Assuming each product item has a unique ID stored in a data attribute
            const productHtml = product.innerHTML;

            localStorage.setItem(productId, productHtml);
            alert('Item added to likes!');
        });
    });
</script>
