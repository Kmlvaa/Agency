import { ModalBody, ModalHeader, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import ModalImage from '../../../assets/camera.jpeg'
import './modal.css'
import 'bootstrap/dist/css/bootstrap.min.css';

interface ModalProps {
    show: boolean;
    onHide: () => void;
}

function modal(props: ModalProps) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered className='modal' contentClassName="custom-modal-style"
            >
            <ModalHeader className='items-center justify-center'>
                <ModalTitle id="contained-modal-title-vcenter">
                    <div className='w-full h-[300px] mb-3'>
                        <Image src={ModalImage} alt='modal image' className='w-full h-full object-contain rounded-xl' />
                    </div>
                    <h2 className='!text-MainOrange'>Mobiloqrafiya</h2>
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <p>
                    Biz müştərilərimizə Mobilografiya sahəsində peşəkar xidmətlər təqdim edirik. Bu xidmətlərə mobil cihazlarla çəkilən yüksək keyfiyyətli foto və video çəkilişləri, vizual məzmunun redaktəsi, sosial media üçün optimallaşdırılmış vizual məzmunun hazırlanması və müxtəlif brendlərin məhsullarının yaradıcı formada təqdim edilməsi daxildir.
                </p>
                <Button className='!bg-MainOrange !border-0 !text-white hover:!text-MainOrange hover:!border hover:!border-MainOrange hover:!bg-background'>Paketlərimizə bax</Button>
            </ModalBody>
        </Modal>
    );
}

export default modal;