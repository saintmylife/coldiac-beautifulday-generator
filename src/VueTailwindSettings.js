import {
    TTextarea,
    TModal
    // ...Rest of the components
} from 'vue-tailwind/dist/components';

const settings = {
    't-textarea': {
        component: TTextarea,
    },
    't-modal-preview': {
        component: TModal,
        props: {
            clickToClose: false,
            escToClose: false,
            hideCloseButton: true,
            fixedClasses: {
                overlay: 'z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50 flex flex-col justify-center',
                wrapper: 'relative p-8 bg-transparent w-full max-w-md m-auto flex-col flex',
                modal: 'overflow-hidden relative rounded-lg',
                body: '',
                header: 'border-b p-3 rounded-t',
                footer: ' p-3 rounded-b',
                close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
            },
            classes: {
                overlay: 'bg-black',
                wrapper: '',
                modal: 'bg-black shadow',
                body: '',
                header: '',
                footer: 'bg-gray-100',
                close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                closeIcon: 'fill-current h-4 w-4',
                overlayEnterClass: 'opacity-0',
                overlayEnterActiveClass: 'transition ease-out duration-100',
                overlayEnterToClass: 'opacity-100',
                overlayLeaveClass: 'opacity-100',
                overlayLeaveActiveClass: 'transition ease-in duration-75',
                overlayLeaveToClass: 'opacity-0',
                enterClass: '',
                enterActiveClass: '',
                enterToClass: '',
                leaveClass: '',
                leaveActiveClass: '',
                leaveToClass: ''
            },
        }
    },
    't-modal': {
        component: TModal,
        props: {
            clickToClose: false,
            escToClose: false,
            hideCloseButton: true,
            fixedClasses: {
                overlay: 'z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed flex flex-col justify-center',
                wrapper: 'relative p-8 bg-transparent w-full max-w-md m-auto flex-col flex',
                modal: 'overflow-hidden relative rounded-lg',
                body: '',
                header: 'border-b p-3 rounded-t',
                footer: ' p-3 rounded-b',
                close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
            },
            classes: {
                overlay: 'bg-black',
                wrapper: '',
                modal: '',
                body: 'text-center text-white',
                header: '',
                footer: 'bg-gray-100',
                close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
                closeIcon: 'fill-current h-4 w-4',
                overlayEnterClass: 'opacity-0',
                overlayEnterActiveClass: 'transition ease-out duration-100',
                overlayEnterToClass: 'opacity-100',
                overlayLeaveClass: 'opacity-100',
                overlayLeaveActiveClass: 'transition ease-in duration-75',
                overlayLeaveToClass: 'opacity-0',
                enterClass: '',
                enterActiveClass: '',
                enterToClass: '',
                leaveClass: '',
                leaveActiveClass: '',
                leaveToClass: ''
            },
        }
    }
}

export default settings