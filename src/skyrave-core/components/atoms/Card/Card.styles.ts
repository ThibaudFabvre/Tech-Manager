import { DESIGN_SYSTEM } from 'src/common/designSystem'

export const styles = {
    cardContainer: {
        display: 'flex',
        backgroundColor: DESIGN_SYSTEM.appBackgroundColor,
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: DESIGN_SYSTEM.boxShadow,
        textOverflow: 'ellipsis',
        height: 62,
        width: 210,
    },
    cardType: {
        borderRadius: 5,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 62,
        width: 36,
    },
    cardTitle: {
        width: '100%',
        padding: DESIGN_SYSTEM.smallSpacing,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
}
