import './css/product-card.css'

export const ProductCard = () => {
  return (
    <section className='product-card'>
        <section className='img-product'> </section>
        <section className='description-product'> 
            <p className='paragraph-product'>Perfume</p>
            <h2>Gabrielle Essence Eau De Parfum</h2>
            <div className='descripcion-product'>
                <p>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>
            </div>
            <article>
                <h3 className='price-product'>$149.99</h3>
                <p className='price-discount'>$169.99</p>
            </article>
            <button>
                <span>
                    <img 
                        src="./images/cart.svg"
                    />
                </span>
                Add to Cart
            </button>
        </section>
    </section>
  )
}
