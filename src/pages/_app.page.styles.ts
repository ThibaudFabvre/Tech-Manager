import { DESIGN_SYSTEM } from 'src/common/designSystem'

export const styles = {
    mainMenu: {
        position: 'fixed',
        width: 'fit-content',
        height: '100vh',
        padding: DESIGN_SYSTEM.smallSpacing,
        borderRadius: 10,
        boxShadow: DESIGN_SYSTEM.boxShadow,
    },
    menuList: { width: '100%' },
    menuItem: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        marginTop: DESIGN_SYSTEM.smallSpacing,
        cursor: 'pointer',
    },
    menuDetail: { marginLeft: 12 },
    bodyContainer: { marginLeft: 200 },
    optionalMenu: {
        transitionDuration: '200ms',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        border: DESIGN_SYSTEM.border,
        height: '100vh',
        width: 320,
        position: 'fixed',
        right: 0,
        backgroundColor: 'white',
        zIndex: 1,
        boxShadow: DESIGN_SYSTEM.boxShadow,
        paddingTop: DESIGN_SYSTEM.extraLargeSpacing,
        paddingLeft: DESIGN_SYSTEM.largeSpacing,
        paddingRight: DESIGN_SYSTEM.largeSpacing,
        paddingBottom: DESIGN_SYSTEM.extraLargeSpacing,
    },
    appContainer: { width: '100vw' },
}
