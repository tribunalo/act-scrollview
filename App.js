import * as React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    ScrollView,
} from 'react-native';



const DATA = [
    
  {id: '1', lastname: 'Angeles',firstname:'Danica',add:'Corella, Bohol',},
  {id: '2', lastname: 'Rhea',firstname: 'Anino', add:'Cortes, Bohol',},
  {id: '3', lastname: 'Barbanida', firstname:'Analie', add:'Catigbian, Bohol',},
  {id: '4', lastname: 'Batulanon' ,firstname: 'Riza', add:'Tagbilaran, Bohol',},
  {id: '5', lastname: 'Baugbog', firstname:'Dave Francis', add:'Dauis, Bohol',},
  {id: '6', lastname: 'Banaga', firstname:'Bernadeth', add:'Loboc, Bohol',},
  {id: '7', lastname: 'Cagay', firstname:'Charlene', add:'Dauis, Bohol',},
  {id: '8', lastname: 'Catayas', firstname:'Nina', add:'Cortes, Bohol',},
  {id: '9', lastname: 'Chatto', firstname:'Marlon', add:'Cortes, Bohol',},
  {id: '10', lastname: 'Cocmeghod', firstname:'Kimberly', add:'Antiquera, Bohol',},
  {id: '11', lastname: 'Dacut', firstname:'Winzel', add:'Antiquera, Bohol',},
  {id: '12', lastname: 'Egama', firstname:'Marjoleine', add:'Dauis, Bohol',},
  {id: '13', lastname: 'Gension', firstname:'Junrey', add:'Balilihan, Bohol',},
  {id: '14', lastname: 'Gultiano', firstname:'Clean May Nina', add:'Balilihan, Bohol',} ,
  {id: '15', lastname: 'Hangad', firstname:'Kyle Joshua', add:'Lapaz, Cortes, Bohol',},
  {id: '16', lastname: 'Jabines', firstname:'Jian Andrei', add:'Dauis, Bohol',},
  {id: '17', lastname: 'Jaum', firstname:'Marie Therese', add:'Valencia, Bohol',},
  {id: '18', lastname: 'Jawa', firstname:'Rodel Glenn', add:'Corella, Bohol',},
  {id: '19', lastname: 'Jumawan', firstname:'Jess Raphael', add:'Hanopol, Bohol',},
  {id: '20', lastname: 'Labesores', firstname:'Karl Jansen', add:'Hanopol, Bohol',},
  {id: '21', lastname: 'Liparto', firstname:'Monaliza', add:'Sevilla, Bohol',},
  {id: '22', lastname: 'Loquias', firstname:'Karl Patrick', add:'Cortes, Bohol',},
  {id: '23',  lastname: 'Noble', firstname:'James Raymond', add:'Sevilla, Bohol',},
  {id: '24', lastname: 'Padonia', firstname:'Christine', add:'Corella, Bohol',},
  {id: '25', lastname: 'Paquinol', firstname:'Sherilyn', add:'Cortes, Bohol',},
  {id: '26', lastname: 'Patac', firstname:'Darwin', add:'Maribojoc, Bohol',}, 
  {id: '27', lastname: 'Payot', firstname:'John Melvin', add:'Catigbian, Bohol',},
  {id: '28', lastname: 'Rabanes', firstname:'Nilson', add:'Corella, Bohol',},
  {id: '29', lastname: 'Razon', firstname:'John Carlo', add:'Catigbian, Bohol',},
  {id: '30', lastname: 'Reformina', firstname:'Orlan', add:'Catigbian, Bohol',},
  {id: '31', lastname: 'Renoblas', firstname:'Ira Jane', add:'Tagbilaran, Bohol',},
  {id: '32', lastname: 'Sajulga', firstname:'Sherwin George', add:'Maribojoc, Bohol',},
  {id: '33', lastname: 'Sanchez', firstname:'Mary Jane', add:'Boctol, Bohol',},
  {id: '34', lastname: 'Suizo', firstname:'Rowena', add:'Jagna, Bohol',},
  {id: '35', lastname: 'Namor', firstname:'John Carlo', add:'Tagbilaran, Bohol',},
  {id: '36', lastname: 'Tamayo', firstname:'Loraine',add:'Tagbilaran, Bohol',},
  {id: '37', lastname: 'Villorejo', firstname:'Jaqueline',add:'Tagbilaran, Bohol',},
  {id: '38', lastname: 'Tribunalo', firstname:'Nikka Jane',add:'Catigbian, Bohol',},
  {id: '39', lastname: 'Lunzon', firstname:'Jeeve',add:'Cortes, Bohol',},
  {id: '40',  lastname: 'Tadlas', firstname:'Kenneth',add:'Tagbilaran, Bohol',},
  {id: '41', lastname: 'Tahil', firstname:'Adriane Jane',add:'Hanopol, Bohol' ,},
  {id: '42', lastname: 'Tinaja', firstname:'Ma. Luisa', add:'Tagbilaran, Bohol',},
  {id: '43', lastname: 'Valiente', firstname:'Melrose', add:'Tagbilaran, Bohol',},
];



const Item = ({ lastname, firstname, add }) => (
  <View>
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{lastname}, {firstname}</Text>
      <Text style={styles.listItemAdd}>{add}</Text>
     </View>
     <View></View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <Text style={styles.text}>List of Guests</Text>
        <ScrollView style={{height:'80%'}}>
            {DATA.map((item) => (
                <Item key={item.id} lastname={item.lastname} firstname={item.firstname} add={item.add} />
            ))}
        </ScrollView>
    </View>
</SafeAreaView>

  )
}

const styles = StyleSheet.create({
container: {
  backgroundColor: 'white',
  alignItems: 'left',
  height: 650,
  marginTop:200,
  width:'150%',

},
text: {
  fontSize: 18,
  color: '#101010',
  marginTop: 5,
  fontWeight: '700',
  fontFamily:'Arial',
  marginBottom:10
},
listItem: {
  marginTop: 15,

  alignItems: 'left',
  backgroundColor: '#fff',
  width: '100%'
},
listItemText: {
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'Arial'

},
listItemAdd:{
    fontSize:15,
    fontFamily:'Arial'
}

});