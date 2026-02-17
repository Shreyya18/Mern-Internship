import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import image2 from '../../assets/2.jpg'

const Cards = () => {
    const desserts = [
        {   
            image:"https://www.tasteofhome.com/wp-content/uploads/2018/01/Ice-Cream-Sandwich-Dessert_EXPS_FT22_27091_ST_09_07_1.jpg?w=700&fit=750%2C750",
            name:"Ice Cream Sandwich Cake",
            price:"200",
            description:" It takes 10 minutes, tops, to prepare this cool ice cream sandwich cake, but it tastes as though you spent a lot of time creating it. —Cathie Valentine, Graniteville, South Carolina"
        },

        {
            image:"https://www.tasteofhome.com/wp-content/uploads/2024/05/Million-Dollar-Pies_EXPS_TOHcom22_265559_P2_MD_12_15_7b.jpg?w=700&fit=750%2C750",
            name:"Million-Dollar Pie",
            price:"250",
            description:"his classic pie has become an instant family favorite. I like to replace some of the ingredients with low-sugar versions. Add blueberries for a beautiful Fourth of July pie! —Laura Wilhelm, West Hollywood, California"
        },

        {
            image:"https://www.tasteofhome.com/wp-content/uploads/2023/01/Oreo-Mousse-Cake_EXPS_FT22_271979_ST_1_06_1-6.jpg?w=700&fit=750%2C750",
            name:"Oreo Mousse Cake",
            price:"150",
            description:"reo mousse cake is so simple to put together, but it tastes as decadent as a fancy restaurant dessert. —Taste of Home Test Kitchen"
        },

        {
            image:image2,
            price:"100",
            description:" This smooth and creamy cheesecake-like treat is light, sweet and pretty too. Convenience products make it quick and easy to prepare. My husband also likes this dessert when I substitute blueberry pie filling. —Lanae Powell, McPherson, Kansas"
        },

        {
            image:"https://www.tasteofhome.com/wp-content/uploads/2022/07/Pina-Colada-Lush_EXPS_FT22_206452_ST_06_30_1.jpg?w=700&fit=750%2C750",
            name:"Pina Colada Lush",
            price:"300",
            description:"Pina colada lush is such a fantastic warm weather dessert—it's so light and refreshing, and a breeze to make! I love how the tart pineapple pairs with the sweet coconut. —Jennifer Stowell, Deep River, Iowa"
        },

        {
            image:"https://www.tasteofhome.com/wp-content/uploads/2024/10/Icebox-Cake_EXPS_FT24_8761_JR_1016_7.jpg?w=700&fit=750%2C750",
            name:"Icebox Cake",
            price:"180",
            description:"You don't have to bake to serve a wonderful dessert! This icebox cake is made from chocolate wafers and whipping cream. It is so delicious. —Cindy Hawkins, New York, New York"
        }
    ]
  return (
    <div style={{margin:"2rem auto", display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap"}}>
    {desserts.map((data)=>(

    <Card sx={{ maxWidth: 345 }} elevation={15}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={data.image}
          alt="dessert"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {data.description}
          </Typography>
          <Typography variant="p" sx={{ color: 'text.primary', marginTop: '200px' }} style={{fontWeight:"bold" , margin:"10px 0"}} >
            Price : ₹{data.price}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     ))}
     </div>
  )
}

export default Cards