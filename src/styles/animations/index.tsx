import { keyframes } from '@emotion/react'

const signColorOn = '#bc13fe'
const signColorOff = '#001037'

const signFlickerOn = keyframes`
from, 0%, 19%, 21%, 54%, 56%, 59%, 61%, 79%, 81%, 89%, 91%, 99%{
    color: ${signColorOff};      
    text-shadow: none;

    border: .4rem double ${signColorOff};
    box-shadow: none;
}
20%, 55%, 60%,   {
    border: .4rem double #fff;	
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${signColorOn},
    0 0 0.8rem ${signColorOn},
    0 0 2.8rem ${signColorOn},
    inset 0 0 1.3rem ${signColorOn};	
}
80% { 
    color: #fff;
    text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px ${signColorOn},
        0 0 80px ${signColorOn},
        0 0 90px ${signColorOn},
        0 0 100px ${signColorOn},
        0 0 150px ${signColorOn};

    border: .4rem double ${signColorOff};
    box-shadow: none;
}
90%, 100%, to { 
    color: #fff;
    text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px ${signColorOn},
        0 0 80px ${signColorOn},
        0 0 90px ${signColorOn},
        0 0 100px ${signColorOn},
        0 0 150px ${signColorOn};

    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${signColorOn},
    0 0 0.8rem ${signColorOn},
    0 0 2.8rem ${signColorOn},
    inset 0 0 1.3rem ${signColorOn};
    border: .4rem double #fff;
}

`
const signFlicker = keyframes`
from, 0%, 19.8%, 20.2%, 23.8%, 24.2%, 54.8%, 55.2%, 100%, to {
    color: #fff;
    text-shadow:
        0 0 4px #fff,
        0 0 11px #fff,
        0 0 19px #fff,
        0 0 40px ${signColorOn},
        0 0 80px ${signColorOn},
        0 0 90px ${signColorOn},
        0 0 100px ${signColorOn},
        0 0 150px ${signColorOn};
    
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${signColorOn},
    0 0 0.8rem ${signColorOn},
    0 0 2.8rem ${signColorOn},
    inset 0 0 1.3rem ${signColorOn};
    border: .4rem double #fff;
}
20%, 24%, 55% { 
    color: ${signColorOff};
    text-shadow: none;

    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 2rem ${signColorOn},
    0 0 0.8rem ${signColorOn},
    0 0 2.8rem ${signColorOn},
    inset 0 0 1.3rem ${signColorOn};  
    border: .4rem double ${signColorOn};
}
`

const fall = keyframes`
0% {
    opacity: 0;
}
3% {
    opacity: 0.9;
}
90% {
    opacity: 0.9;
}
100% {
    transform: translate(0, 23vh);
    opacity: 0;
}
`

export { signFlicker, signFlickerOn }
