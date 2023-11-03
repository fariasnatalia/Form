import {
    Switch as DefaultSwitch,
    View,
} from "react-native";
import tailwind from "twrnc";


export const Switch = ({ label, containerStyle, ...props }) => {
    return (
        <View style={[tailwind`flex flex-row items-center gap-4`, containerStyle]}>
            <DefaultSwitch {...props} />
            {label ? label() : null}
        </View>
    );
};