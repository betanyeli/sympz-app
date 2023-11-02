import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import styles from './AddSymptom.styles';


export default function AddSymptom() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
    );
}
