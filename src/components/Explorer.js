import React from 'react'
import styled from 'styled-components'
import { Modal, Frame } from '@react95/core'
import Item from './Item'
import '@react95/icons/icons.css';
import { WindowsExplorer } from '@react95/icons';

const FilesWrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(3, 1fr);
	flex-wrap: wrap;
`;



function Explorer({ items, closeExplorer, openNotepad, isMobile }) {
    return (
        <Modal
        icon={<WindowsExplorer variant="32x32_4" />}
        title="Explorer - Declan Gessel"
            closeModal={closeExplorer}
            style={{
                left: isMobile ? '5%' : '15%',
                top: '30%',
                width: isMobile ? '90%' : 450,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] },
                { name: 'Help', list: [] },
            ]}>
            <Frame
                bg="white"
                boxShadow="in"
                height="100%"
            >
                <FilesWrapper>
                    {
                        items.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                openNotepad={openNotepad}
                            />
                        ))
                    }
                </FilesWrapper>
            </Frame>
        </Modal>
    )
}

export default Explorer
