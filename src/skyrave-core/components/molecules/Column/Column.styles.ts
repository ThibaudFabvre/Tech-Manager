import { DESIGN_SYSTEM } from 'src/common/designSystem'

export const styles = {
    columnContainer: {
        width: 240,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        height: 480,
        boxShadow: DESIGN_SYSTEM.boxShadow,
    },
    titleContainer: {
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#fff',
        boxShadow: DESIGN_SYSTEM.boxShadow,
    },
    columnTitle: {},
    input: {
        boxShadow: 'none',
        border: DESIGN_SYSTEM.border,
        borderRadius: 5,
        outline: 'none',
    },
    moreOptionsButton: {
        width: 20,
        height: 20,
        marginRight: DESIGN_SYSTEM.mediumSpacing,
        border: 'none',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
    },
    cardContainer: {
        padding: DESIGN_SYSTEM.mediumSpacing,
        marginTop: DESIGN_SYSTEM.mediumSpacing,
        borderRadius: 5,
        height: 480,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: DESIGN_SYSTEM.mediumSpacing,
    },
}
