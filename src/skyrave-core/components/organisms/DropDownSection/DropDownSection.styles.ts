import { DESIGN_SYSTEM } from 'src/common/designSystem'

export const styles = {
    wrapper: {
        border: DESIGN_SYSTEM.border,
        borderRadius: 5,
        marginTop: DESIGN_SYSTEM.smallSpacing,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: DESIGN_SYSTEM.appBackgroundColor,
        width: '100%',
        paddingTop: DESIGN_SYSTEM.smallSpacing,
        paddingBottom: DESIGN_SYSTEM.smallSpacing,
        paddingLeft: DESIGN_SYSTEM.largeSpacing,
        paddingRight: DESIGN_SYSTEM.largeSpacing,
        cursor: 'pointer',
    },
    icon: {
        height: 32,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DESIGN_SYSTEM.appBackgroundColor,
        border: DESIGN_SYSTEM.border,
        borderRadius: '50%',
        cursor: 'pointer',
    },
}
