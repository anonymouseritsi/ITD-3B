import react from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import first_container from "@/style/mystyle";

const my_app = ()=> {
  return(
    <View >
      <View style={first_container.cont2}>
          <Image source={require('../assets/images/icon.png')} style={first_container.img_cnt}></Image>
            <View  style={first_container.text_container}>
              <Text style={first_container.text_size}> Hello</Text>
              <Text style={first_container.text_size}> Richie Alcantara</Text>
            </View>
          <Image source={require('../assets/images/search.png')} style={first_container.img_cnt2}></Image>

          
      </View>
        <View style={first_container.blue_box}>
          <View style={first_container.topcontainer}>
            <Text style={first_container.text_size2}> Current Balance</Text>
            <Image source= {require('../assets/images/favicon.png')} ></Image>
          </View>
          
          <Text style={first_container.text_size2}> Richie Alcantara</Text>


        </View>


      <View>



      </View>

    </View>

)};



export default my_app;