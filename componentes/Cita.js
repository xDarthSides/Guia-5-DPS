import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
const reserva = ({item, eliminarNombre}) => {
const dialogoEliminar = id => {
console.log('eliminando....', id);
eliminarNombre(id);
}
return (
<View style={styles.cita}>
<View>
<Text style={styles.label}>Nombre del cliente: </Text>
<Text style={styles.texto}>{item.nombre}</Text>
</View>
<View>
<Text style={styles.label}>Seccion donde desea comer: </Text>
<Text style={styles.texto}>{item.seccion}</Text>
</View>
<View>
<Text style={styles.label}>Cantidad de personas para comer: </Text>
<Text style={styles.texto}>{item.cantidad}</Text>
</View>
<View>
<TouchableHighlight onPress={ () => dialogoEliminar(item.id) }

style={styles.btnEliminar}>

<Text style={styles.textoEliminar}> Eliminar &times; </Text>
</TouchableHighlight>
</View>
</View>

)
}
const styles = StyleSheet.create({
reserva: {
backgroundColor: '#FFF',
borderBottomColor: '#e1e1e1',
borderStyle: 'solid',
borderBottomWidth: 1,
paddingVertical: 20,
paddingHorizontal: 10
},
label: {
fontWeight: 'bold',
fontSize: 18,
marginTop: 20
},
texto: {
fontSize: 18,
},
btnEliminar: {
padding: 10,
backgroundColor: 'red',
marginVertical: 10
},
textoEliminar: {
color: '#FFF',
fontWeight: 'bold',
textAlign: 'center'
}
})
export default Cita;