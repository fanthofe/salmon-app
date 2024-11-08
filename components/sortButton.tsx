import { useThemeColor } from "@/hooks/useThemeColors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native"
import { ThemedText } from "./ThemedText";
import { Card } from "./Card";
import { Radio } from "./Radio";

type Props = {
    value: "id" | "name",
    onChange: (value: 'id' | 'name') => void
}

export function SortButton({value, onChange} : Props) {
    const colors = useThemeColor();
    const [showModal, setShowModal] = useState(false);
    const onPress = () => {
        setShowModal(true);
    };
    const onClose = () => {
        setShowModal(false);
    }
    const options = [
        {label: "Numéro client", value: "id"},
        {label: "Nom", value: "name"}
    ] as const;

    return (
      <>
        <Pressable onPress={onPress}>
          <View style={[styles.button, { backgroundColor: colors.grayWhite }]}>
            <Ionicons name="filter-outline" size={16} color={colors.tint} />
          </View>
        </Pressable>
        <Modal transparent visible={showModal} onRequestClose={onClose}>
          <Pressable style={styles.backdrop} onPress={onClose} />
          <View style={[styles.popup, { backgroundColor: colors.tint }]}>
            <ThemedText
              style={styles.title}
              variant="subtitle1"
              color="grayWhite"
            >
              Trier par :
            </ThemedText>
            <Card style={styles.card}>
              {options.map((item) => (
                <Pressable onPress={() => onChange(item.value)}>
                  <View key={item.value} style={styles.rowRadio}>
                      <Radio checked={item.value === value}/>
                      <ThemedText variant="body1">{item.label}</ThemedText>
                  </View>
                </Pressable>
              ))}
            </Card>
          </View>
        </Modal>
      </>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 32,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    backdrop: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    popup: {
        padding: 4,
        borderRadius: 12,
        gap: 16
    },
    title : {
        paddingLeft: 10,
        paddingTop: 10
    },
    card: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        gap: 10
    },
    rowRadio: {
      flexDirection: 'row',
      gap: 7
    },
    cardRadio: {
      gap: 5
    }
});