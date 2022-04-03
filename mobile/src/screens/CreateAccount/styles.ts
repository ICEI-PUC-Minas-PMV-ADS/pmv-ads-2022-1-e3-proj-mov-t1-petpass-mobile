import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 10,
        fontFamily: theme.fonts.title700,
        lineHeight: 40
    }, label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,    
      }, field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      },
      column: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      divider: {
        marginRight: 4,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight 
      },

});