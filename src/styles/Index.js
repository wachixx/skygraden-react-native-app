import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import {Colors} from './Colors';

const Header = StyleSheet.create({
    topHeaderWrapper: {
        backgroundColor:Colors.BLACK,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:"3%",
        paddingVertical:10
    },
    topLeftWraper:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:150,
    },
    topHeaderTxt:{
        color:Colors.WHITE,
    },
    bottomHeaderWrapper: {
        backgroundColor:Colors.LIGH_BLACK,
        paddingHorizontal:"3%",
        paddingVertical:10
    },
    IconsContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    logoWrapper: {
        width: 170,
        flexDirection:"row",
    },
    IconsWrapper:{
        flexDirection:"row"
    },
    headerIcon:{
       width:35,
       height:35
    },
    logo:{
       height:40,
       width:130,
       marginLeft:10
    },
    cartNumber:{
        position:"absolute",
        top:0,
        right:-4,
        backgroundColor:Colors.GREEN,
        color: Colors.WHITE,
        fontSize:13,
        width:15,
        height:15,
        borderRadius:15/2,
        textAlign:"center"
    },
    searchFieldWrapper:{
        position:"relative",
        marginTop:7
    },
    input: {
        width:"100%",
        height: 40,
        marginTop: 5,
        marginBottom:5,
        backgroundColor:Colors.WHITE,
        borderRadius:20,
        padding: 10,
        alignSelf:"center",
        paddingHorizontal:20
    },
    searchIcon:{
        position:"absolute",top:13, right:15
    },
    breadcrumbsWrapper:{
        backgroundColor: Colors.BREADCRUMB,
        paddingVertical:15,
        paddingHorizontal:"3%"
    }
})

const Buttons = StyleSheet.create({
    addToCart: {
        borderRadius:5,
        backgroundColor: Colors.TEXT_COLOR,
        paddingVertical:5,
        paddingHorizontal:15,
        marginTop:10,
        flexDirection:"row",
        alignItems:"center"
    },
    btnTxt: {
        color:Colors.WHITE
    },
    addToCartProductPage:{
        backgroundColor:Colors.GREEN,
        borderRadius:5, 
        paddingVertical:15,
        marginTop:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    btnProductTxt:{
        color:Colors.WHITE,
        fontSize:25,
        fontWeight:"bold"
    }
})

const ProductStyles = StyleSheet.create({
    productWrapper:{
        flex: 1/2,
        borderWidth:1,
        margin:3,
        borderColor:Colors.BORDER_COLOR,
        backgroundColor:Colors.WHITE,
        borderRadius:5,
        padding:15
    },
    productImageWrapper:{
        backgroundColor:Colors.WHITE,
        height:200,
        width:"100%",
        borderTopStartRadius:5,
        borderTopEndRadius:5
    },
    productImage:{
        height:200,
        width:"100%",
    },
    productName: {
        color:Colors.TEXT_COLOR,
        fontWeight:"900"
    },
    productOfferPrice:{
        fontSize:17,
        fontWeight:"bold",
        color:Colors.TEXT_COLOR,
        marginTop:5
    },
    productPrice:{
        textDecorationLine:"line-through"
    },
    separator:{
        width:1,
        backgroundColor:Colors.WHITE,
        height:"70%",
        marginHorizontal:10
    },
    productPageImageWrapper:{
        backgroundColor:Colors.WHITE,
        height:350,
        width:"100%",
        borderTopStartRadius:5,
        borderTopEndRadius:5,
        marginTop:20,
        paddingHorizontal:"4%",
        alignItems:"center"
    },
    productPageImage:{
        height:350,
        width:"92%",
    },
    partnerName:{
        fontSize:17,
        textTransform:"uppercase",
        textDecorationLine:"underline",
        marginHorizontal:"3%",
        color:Colors.TEXT_COLOR,
    },
    productPageName:{
        color:Colors.TEXT_COLOR,
        fontWeight:"900",
        fontSize:20,
        marginHorizontal:"3%",
        marginBottom:10
    },
    productPageOfferPrice:{
        color:Colors.GREEN,
        fontSize:25,
        fontWeight:"bold"
    },
    productPagePrice:{
        textDecorationLine:"line-through",
        fontSize:20,
        fontWeight:"bold",
        marginTop:10
    },
    shippingDetailsWrapper:{
        padding:15,
        borderRadius:10,
        backgroundColor:Colors.LIGHT_GREEN,
        flexDirection:"row",
        marginTop:25
    },
    shippingText:{
        flex:1,
        marginLeft:15
    },
    productDetailsWrapper:{
        minHeight:50,
        marginTop:35
    },
    productDetailsCo:{
        backgroundColor:Colors.LIGHT_GREEN,
        marginTop:-1,
        padding:"3%"
    },
    knowYourSellerWrapper:{
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        padding:20,
        marginTop:30
    },
    knowSellerHeader:{
        fontWeight:"bold",
        fontSize:17,
        color:Colors.TEXT_COLOR,
        marginBottom:20
    },
    partnerLogo:{
        width:100,
        height:100,
        backgroundColor:Colors.GREY,
        borderRadius:100/2
    },
    sellerDetailsTxt:{
        color:Colors.TEXT_COLOR,
        lineHeight:25
    }
})

const CartStyles = StyleSheet.create({
    wrappper:{
        flex:1,
        flexDirection:"row",
        backgroundColor:Colors.WHITE,
        marginVertical:5,
        padding:10,
        borderRadius:6
    },
    cartImage:{
        height:70,
        width:80
    },
    productName:{
        color:Colors.TEXT_COLOR,
        paddingRight:55,
        fontSize:15,
        width:"75%"
    },
    remove:{
        fontSize:16,
        color:Colors.GREEN,
        flex:1
    }
})

const otherStyles = StyleSheet.create({
    loading:{
        width:"100%",
        height:500,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
    },
    loadingTxt:{
        textAlign:"center"
    }
})

const CollapseViewStyle =  StyleSheet.create({
    wrapper:{
       flexDirection:"row",
       justifyContent:"space-between",
       borderBottomColor:Colors.TEXT_COLOR,
       borderBottomWidth:1
    },
    heading:{
        fontSize:17,
        color:Colors.TEXT_COLOR,
        fontWeight:"bold",
        marginTop:25,
    }
})


export { Header, ProductStyles, Buttons, otherStyles, CartStyles, CollapseViewStyle}