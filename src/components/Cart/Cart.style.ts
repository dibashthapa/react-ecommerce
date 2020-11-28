import { Theme  , createStyles} from "@material-ui/core/styles"

const styles = (theme:Theme) => (
  createStyles({
  media:{
    height:100 , 
    width:"50%" , 
  } , 
  cart : {
    display:"flex" , 
    justifyContent:"space-evenly"
  } , 
    cartContent : {
      margin:"auto"
       }
  })
)


export default styles
