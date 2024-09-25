import Link from 'next/link'
import classes from './page.module.css'

export default function MealsPage(){
   return <>
    <header className={classes.header}>
        <h1>
         Comidas GOSTOSAS, criadas <span className={classes.highlight}>para você</span>   
        </h1>
        <p>Choose your favorite recipe and cook it yourself. É fácil e rápido!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>

        </p>
    </header>
    <main className={classes.main}>
        
    </main>
   
   </>

}