import React from 'react'

interface Props {
    id: string
}

export const GlobalSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'header__logo':
            return(
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.5 65C50.4493 65 65 50.4493 65 32.5C65 14.5507 50.4493 0 32.5 0C14.5507 0 0 14.5507 0 32.5C0 50.4493 14.5507 65 32.5 65Z" fill="#4793FF"/>
                <path d="M65 32.5C65 29.8954 64.6916 27.3631 64.113 24.9358L54.3423 15.1651L53.0241 15.7211L48.3235 11.1622C48.3235 11.1622 46.5495 14.0707 44.5394 12.8753L41.3829 9.7971L41.1963 14.2822L8.78809 46.265L27.0688 64.5457C28.8351 64.8429 30.6492 65 32.5 65C50.4493 65 65 50.4493 65 32.5Z" fill="#424FDD"/>
                <path d="M58.3388 29.0023L59.7103 28.1252L58.2388 27.1841C56.6468 26.1659 56.217 24.03 57.2916 22.4755L58.2847 21.0386L56.6808 20.7601C54.8077 20.4347 53.5845 18.6126 53.9927 16.7559L54.3422 15.1659L52.6363 15.5409C50.7905 15.9467 48.9765 14.7403 48.637 12.8812L48.3233 11.163L46.9922 12.1001C45.4377 13.1946 43.2843 12.7711 42.26 11.1694L41.3829 9.79797L40.4418 11.2695C39.4237 12.8615 37.2878 13.2912 35.7333 12.2167L34.2964 11.2235L34.0179 12.8275C33.6925 14.7005 31.8705 15.9237 30.0136 15.5156L28.4237 15.1661L28.7987 16.8719C29.2044 18.7177 27.998 20.5317 26.1389 20.8712L24.4207 21.1849L25.3579 22.516C26.4524 24.0705 26.0288 26.2239 24.4272 27.2482L23.0557 28.1253L24.5271 29.0664C26.1192 30.0846 26.5488 32.2204 25.4743 33.775L24.4812 35.2118L26.0851 35.4904C27.9581 35.8157 29.1813 37.6379 28.7732 39.4946L28.4237 41.0845L30.1296 40.7095C31.9753 40.3038 33.7894 41.5102 34.1288 43.3693L34.4425 45.0876L35.7736 44.1505C37.3282 43.056 39.4816 43.4795 40.5058 45.0812L41.3829 46.4526L42.324 44.9811C43.3422 43.3891 45.4781 42.9594 47.0326 44.0339L48.4695 45.0271L48.748 43.4231C49.0734 41.5501 50.8955 40.3269 52.7522 40.735L54.3422 41.0845L53.9672 39.3787C53.5614 37.5329 54.7678 35.7189 56.6269 35.3794L58.3453 35.0657L57.4081 33.7346C56.3136 32.1801 56.7371 30.0265 58.3388 29.0023Z" fill="#FDBF2D"/>
                <path d="M57.4082 33.734L58.3451 35.0644L56.6275 35.378C54.7676 35.7183 53.5615 37.5324 53.9678 39.3783L54.3423 41.0833L52.7529 40.7342C50.8955 40.3254 49.0738 41.5492 48.7475 43.4218L48.4695 45.0265L47.0323 44.0324C45.4784 42.9584 43.3418 43.3875 42.3237 44.9795L41.3829 46.4521V9.79697L42.2602 11.1681C43.2847 12.7702 45.4378 13.1942 46.9917 12.0986L48.3235 11.1617L48.637 12.8807C48.976 14.7393 50.7902 15.9453 52.6361 15.5403L54.3423 15.1645L53.9932 16.7553C53.5844 18.6113 54.8082 20.4344 56.6808 20.7594L58.2842 21.0374L57.2914 22.4745C56.2174 24.0297 56.6465 26.165 58.2385 27.1832L59.7099 28.1239L58.3388 29.0012C56.7366 30.0257 56.3139 32.1788 57.4082 33.734Z" fill="#FD9827"/>
                <path d="M41.383 40.9704C48.4777 40.9704 54.2291 35.219 54.2291 28.1243C54.2291 21.0296 48.4777 15.2782 41.383 15.2782C34.2883 15.2782 28.5369 21.0296 28.5369 28.1243C28.5369 35.219 34.2883 40.9704 41.383 40.9704Z" fill="#FFE05F"/>
                <path d="M54.2293 28.1239C54.2293 35.2193 48.4771 40.9703 41.3829 40.9703V15.2788C48.4771 15.2788 54.2293 21.0298 54.2293 28.1239Z" fill="#F9CB0D"/>
                <path d="M42.5274 32.2419C42.1958 32.2419 41.8694 32.2632 41.5478 32.3006C41.5794 31.9404 41.5966 31.576 41.5966 31.2076C41.5966 24.3886 36.0687 18.8605 29.2495 18.8605C23.5703 18.8605 18.7873 22.6953 17.3468 27.9164C16.8894 27.8562 16.4229 27.8247 15.9491 27.8247C10.0886 27.8247 5.33777 32.5755 5.33777 38.4361C5.33777 44.2966 10.0886 49.0474 15.9491 49.0474H42.5274C47.1682 49.0474 50.9302 45.2853 50.9302 40.6447C50.9302 36.0039 47.1682 32.2419 42.5274 32.2419Z" fill="white"/>
                <path d="M50.9302 40.6435C50.9302 45.2846 47.1684 49.0466 42.5272 49.0466H28.134V18.9097C28.5016 18.8759 28.8735 18.8595 29.2498 18.8595C36.0691 18.8595 41.5969 24.3873 41.5969 31.2066C41.5969 31.5753 41.5795 31.9395 41.5478 32.2996C41.8696 32.2625 42.1956 32.2406 42.5272 32.2406C47.1684 32.2406 50.9302 36.0035 50.9302 40.6435Z" fill="#DAEFEC"/>
                </svg>
            )
        case 'change__theme':
            return(
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6667 4.09792V24.7917C6.83958 24.7917 2.91667 20.9562 2.91667 16.2312C2.91667 13.9562 3.82083 11.8125 5.46875 10.1937L11.6667 4.09792ZM11.6667 0L3.42708 8.10833C1.3125 10.1937 0 13.0667 0 16.2312C0 22.575 5.22083 27.7083 11.6667 27.7083C18.1125 27.7083 23.3333 22.575 23.3333 16.2312C23.3333 13.0667 22.0208 10.1937 19.9062 8.10833L11.6667 0Z" fill="#4793FF"/>
                </svg>
            ) 
        case 'sun':
            return (
                <svg width="119" height="119" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.5229 88.0144C75.2638 88.0144 88.0243 75.2545 88.0243 59.5144C88.0243 43.7742 75.2638 31.0143 59.5229 31.0143C43.782 31.0143 31.0215 43.7742 31.0215 59.5144C31.0215 75.2545 43.782 88.0144 59.5229 88.0144Z" fill="url(#paint0_linear_2_179)"/>
                <path d="M86.3084 5.95127L79.6106 22.1222C77.4274 27.389 69.5268 24.1172 71.71 18.8504L78.4078 2.67947C80.591 -2.58734 88.4916 0.684466 86.3084 5.95127ZM47.2843 100.155L40.5865 116.326C38.4033 121.593 30.5027 118.321 32.6859 113.054L39.3837 96.8835C41.5669 91.6167 49.4675 94.8885 47.2843 100.155ZM116.326 40.5959L100.154 47.2934C94.8873 49.4765 91.6154 41.5763 96.8824 39.3932L113.054 32.6957C118.321 30.5126 121.593 38.4128 116.326 40.5959ZM22.1176 79.6182L5.94586 86.3157C0.6788 88.4988 -2.59316 80.5986 2.6739 78.4155L18.8456 71.718C24.1127 69.5349 27.3846 77.4351 22.1176 79.6182ZM113.054 86.3214L96.8824 79.6239C91.6154 77.4408 94.8873 69.5406 100.154 71.7237L116.326 78.4212C121.593 80.6043 118.321 88.5045 113.054 86.3214ZM18.8456 47.2991L2.6739 40.6016C-2.59316 38.4185 0.6788 30.5183 5.94586 32.7014L22.1176 39.3989C27.3846 41.582 24.1127 49.4822 18.8456 47.2991ZM40.5808 2.67377L47.2786 18.8447C49.4618 24.1115 41.5612 27.3833 39.378 22.1165L32.6802 5.94557C30.497 0.678766 38.3976 -2.59304 40.5808 2.67377ZM79.6049 96.8778L86.3027 113.049C88.4859 118.316 80.5853 121.587 78.4021 116.321L71.7043 100.15C69.5211 94.8828 77.4217 91.611 79.6049 96.8778Z" fill="#FFB300"/>
                <defs>
                <linearGradient id="paint0_linear_2_179" x1="59.5229" y1="31.0143" x2="59.5229" y2="87.2546" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC227"/>
                <stop offset="1" stopColor="#FFB300"/>
                </linearGradient>
                </defs>
                </svg>

            )   
        case 'temp':
            return(
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_133)">
                <path d="M15.4056 2.98156H19.1057C19.308 2.98156 19.4719 2.81759 19.4719 2.61533C19.4719 2.41308 19.308 2.24911 19.1057 2.24911H15.4056C15.2033 2.24911 15.0394 2.41308 15.0394 2.61533C15.0394 2.81759 15.2034 2.98156 15.4056 2.98156Z" fill="#4F667A"/>
                <path d="M15.4056 4.67249H17.2556C17.4579 4.67249 17.6219 4.50852 17.6219 4.30627C17.6219 4.10401 17.4579 3.94004 17.2556 3.94004H15.4056C15.2033 3.94004 15.0394 4.10401 15.0394 4.30627C15.0394 4.50852 15.2034 4.67249 15.4056 4.67249Z" fill="#4F667A"/>
                <path d="M19.1064 5.64909H15.4063C15.204 5.64909 15.0401 5.81306 15.0401 6.01532C15.0401 6.21757 15.204 6.38154 15.4063 6.38154H19.1064C19.3087 6.38154 19.4726 6.21757 19.4726 6.01532C19.4726 5.81306 19.3086 5.64909 19.1064 5.64909Z" fill="#4F667A"/>
                <path d="M15.4056 8.07248H17.2556C17.4579 8.07248 17.6219 7.9085 17.6219 7.70625C17.6219 7.504 17.4579 7.34003 17.2556 7.34003H15.4056C15.2033 7.34003 15.0394 7.504 15.0394 7.70625C15.0394 7.9085 15.2034 8.07248 15.4056 8.07248Z" fill="#4F667A"/>
                <path d="M19.1064 9.02393H15.4063C15.204 9.02393 15.0401 9.1879 15.0401 9.39016C15.0401 9.59241 15.204 9.75638 15.4063 9.75638H19.1064C19.3087 9.75638 19.4726 9.59241 19.4726 9.39016C19.4726 9.1879 19.3086 9.02393 19.1064 9.02393Z" fill="#4F667A"/>
                <path d="M15.4056 11.4473H17.2556C17.4579 11.4473 17.6219 11.2833 17.6219 11.0811C17.6219 10.8788 17.4579 10.7149 17.2556 10.7149H15.4056C15.2033 10.7149 15.0394 10.8788 15.0394 11.0811C15.0394 11.2833 15.2034 11.4473 15.4056 11.4473Z" fill="#4F667A"/>
                <path d="M19.1064 12.4306H15.4063C15.204 12.4306 15.0401 12.5946 15.0401 12.7968C15.0401 12.9991 15.204 13.1631 15.4063 13.1631H19.1064C19.3087 13.1631 19.4726 12.9991 19.4726 12.7968C19.4726 12.5946 19.3086 12.4306 19.1064 12.4306Z" fill="#4F667A"/>
                <path d="M17.2556 14.1215H15.4056C15.2033 14.1215 15.0394 14.2855 15.0394 14.4878C15.0394 14.69 15.2033 14.854 15.4056 14.854H17.2556C17.4579 14.854 17.6219 14.69 17.6219 14.4878C17.6219 14.2855 17.4579 14.1215 17.2556 14.1215Z" fill="#4F667A"/>
                <path d="M15.9548 19.7869C15.9548 21.1932 15.403 22.5111 14.402 23.499C13.4186 24.4687 12.1216 25 10.7422 25C10.7173 25 10.6924 25 10.6675 24.9995C10.4468 24.9961 10.2285 24.9795 10.0127 24.9487C8.91009 24.7934 7.88564 24.2876 7.0775 23.4872C6.11164 22.5311 5.56181 21.2616 5.52959 19.9134C5.48613 18.0862 6.40267 16.3737 7.93398 15.3937V2.80772C7.93398 1.51275 8.81488 0.419931 10.0093 0.0971641C10.2427 0.0336851 10.4883 -7.62939e-06 10.7417 -7.62939e-06C12.2896 -7.62939e-06 13.5494 1.25932 13.5494 2.80772V15.3937C15.0383 16.3478 15.9548 18.0114 15.9548 19.7869Z" fill="#E9F5FF"/>
                <path d="M15.9548 19.7869C15.9548 21.1932 15.403 22.5111 14.402 23.499C13.4185 24.4687 12.1216 25 10.7422 25C9.82953 25 9.27726 25 9.27726 25C9.52532 25 9.77093 24.9829 10.0126 24.9487C11.1133 24.7944 12.1309 24.2944 12.9371 23.499C13.9386 22.5111 14.4899 21.1932 14.4899 19.7869C14.4899 18.0114 13.5733 17.8215 12.0845 16.8674V2.80772C12.0845 1.51275 11.2031 0.419931 10.0092 0.0971641C10.2426 0.0336851 10.4882 -7.62939e-06 10.7417 -7.62939e-06C12.2896 -7.62939e-06 13.5494 1.25932 13.5494 2.80772V15.3937C15.0382 16.3478 15.9548 18.0114 15.9548 19.7869Z" fill="#CDEAF7"/>
                <path d="M14.4899 19.7942C14.4899 20.805 14.0934 21.7528 13.3731 22.4628C12.6666 23.1601 11.732 23.5424 10.7383 23.5424C10.7212 23.5424 10.7046 23.5424 10.688 23.5419C10.5005 23.5395 10.3149 23.5224 10.1323 23.4926C9.37299 23.3671 8.66887 23.0087 8.1083 22.4535C7.41296 21.7655 7.01695 20.8533 6.994 19.886C6.96177 18.5202 7.67469 17.2438 8.85442 16.5543C9.18988 16.3585 9.39887 15.9947 9.39887 15.6061V2.81503C9.39887 2.2945 9.69674 1.84185 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503V15.6061C12.084 15.9947 12.293 16.3585 12.6285 16.5543C13.7765 17.2253 14.4899 18.4665 14.4899 19.7942Z" fill="#FF6E6E"/>
                <path d="M14.4899 19.7942C14.4899 20.805 14.0934 21.7528 13.3731 22.4628C12.6666 23.1601 11.732 23.5424 10.7383 23.5424C10.7212 23.5424 10.7046 23.5424 10.688 23.5419C10.5005 23.5395 10.3149 23.5224 10.1323 23.4926C10.8926 23.3686 11.5938 23.0141 12.1524 22.4628C12.8726 21.7528 13.2691 20.805 13.2691 19.7942C13.2691 18.4665 12.5557 17.2253 11.4077 16.5543C11.0723 16.3585 10.8633 15.9947 10.8633 15.6061V2.81503C10.8633 2.2945 10.5654 1.84234 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503V15.6061C12.084 15.9947 12.293 16.3585 12.6285 16.5543C13.7765 17.2253 14.4899 18.4665 14.4899 19.7942Z" fill="#F44E92"/>
                <path d="M12.084 2.81503V6.01535H9.39886V2.81503C9.39886 2.2945 9.69672 1.84185 10.1313 1.61918C10.3144 1.52494 10.5219 1.47221 10.7417 1.47221C11.4819 1.47221 12.084 2.07477 12.084 2.81503Z" fill="#4F667A"/>
                <path d="M12.084 2.81503V6.01535H10.8633V2.81503C10.8633 2.2945 10.5654 1.84234 10.1313 1.61918C10.3144 1.52494 10.522 1.47221 10.7417 1.47221C11.482 1.47221 12.084 2.07477 12.084 2.81503Z" fill="#3A5366"/>
                </g>
                <defs>
                <clipPath id="clip0_2_133">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            )
        case 'wind':
            return(
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.087 2.6087C13.9291 2.6087 12.1739 4.36436 12.1739 6.52175C12.1739 6.76175 12.3683 6.95653 12.6087 6.95653C12.8491 6.95653 13.0435 6.76175 13.0435 6.52175C13.0435 4.84349 14.4091 3.47827 16.087 3.47827C17.7648 3.47827 19.1304 4.84349 19.1304 6.52175C19.1304 8.20001 17.7648 9.56523 16.087 9.56523H0.434783C0.194783 9.56523 0 9.76001 0 10C0 10.24 0.194783 10.4348 0.434783 10.4348H16.087C18.2448 10.4348 20 8.67914 20 6.52175C20 4.36436 18.2448 2.6087 16.087 2.6087Z" fill="#007AFF"/>
                <path d="M0.434783 7.82609H7.82609C9.50435 7.82609 10.8696 6.46087 10.8696 4.78261C10.8696 3.10435 9.50435 1.73914 7.82609 1.73914C6.14783 1.73914 4.78261 3.10435 4.78261 4.78261C4.78261 5.02261 4.97739 5.2174 5.21739 5.2174C5.45739 5.2174 5.65217 5.02261 5.65217 4.78261C5.65217 3.58392 6.62739 2.6087 7.82609 2.6087C9.02478 2.6087 10 3.58392 10 4.78261C10 5.98131 9.02478 6.95653 7.82609 6.95653H0.434783C0.194783 6.95653 0 7.15131 0 7.39131C0 7.63131 0.194783 7.82609 0.434783 7.82609Z" fill="#007AFF"/>
                <path d="M15.2174 17.3913C14.0187 17.3913 13.0435 16.4161 13.0435 15.2174C13.0435 14.9774 12.8491 14.7826 12.6087 14.7826C12.3683 14.7826 12.1739 14.9774 12.1739 15.2174C12.1739 16.8957 13.5396 18.2609 15.2174 18.2609C16.8952 18.2609 18.2609 16.8957 18.2609 15.2174C18.2609 13.5391 16.8952 12.1739 15.2174 12.1739H0.434783C0.194783 12.1739 0 12.3687 0 12.6087C0 12.8487 0.194783 13.0435 0.434783 13.0435H15.2174C16.4161 13.0435 17.3913 14.0187 17.3913 15.2174C17.3913 16.4161 16.4161 17.3913 15.2174 17.3913Z" fill="#007AFF"/>
                </svg>
            )
        case 'pressure':
            return(
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2_124)">
                <path d="M10.1345 0.281303C9.81729 -0.0359516 9.34139 -0.115293 8.94479 0.201998C8.94479 0.201998 8.86549 0.201998 8.86549 0.281303C8.23094 1.07446 2.3615 8.21295 2.3615 11.8615C2.3615 15.8274 5.53416 19 9.5 19C13.4658 19 16.6385 15.8274 16.6385 11.8615C16.6385 8.21295 10.7691 1.07446 10.1345 0.281303Z" fill="url(#paint0_linear_2_124)"/>
                <path d="M7.70508 13.9841L12.4723 9.21692L11.3506 8.09524L6.58341 12.8624L7.70508 13.9841Z" fill="white"/>
                <path d="M7.12049 10.2752C7.55853 10.2752 7.91364 9.92004 7.91364 9.482C7.91364 9.04395 7.55853 8.68884 7.12049 8.68884C6.68244 8.68884 6.32733 9.04395 6.32733 9.482C6.32733 9.92004 6.68244 10.2752 7.12049 10.2752Z" fill="white"/>
                <path d="M11.8795 13.4478C12.3175 13.4478 12.6726 13.0927 12.6726 12.6547C12.6726 12.2166 12.3175 11.8615 11.8795 11.8615C11.4414 11.8615 11.0863 12.2166 11.0863 12.6547C11.0863 13.0927 11.4414 13.4478 11.8795 13.4478Z" fill="white"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_2_124" x1="3.90805" y1="16.383" x2="15.0729" y2="5.22218" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34CDFA"/>
                <stop offset="1" stopColor="#E8D9F1"/>
                </linearGradient>
                <clipPath id="clip0_2_124">
                <rect width="19" height="19" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            )
        case 'precipitation':
            return(
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.88">
                <path d="M24.4728 16.2818C24.0438 16.2816 23.6216 16.1734 23.2454 15.9672C22.8691 15.7609 22.5508 15.4633 22.3199 15.1016C22.0891 15.4634 21.7709 15.7611 21.3946 15.9674C21.0184 16.1737 20.5962 16.2818 20.1671 16.2818C19.738 16.2818 19.3158 16.1737 18.9395 15.9674C18.5632 15.7611 18.245 15.4634 18.0142 15.1016C17.7835 15.4634 17.4652 15.7611 17.089 15.9674C16.7127 16.1737 16.2905 16.2818 15.8614 16.2818C15.4323 16.2818 15.0101 16.1737 14.6339 15.9674C14.2576 15.7611 13.9394 15.4634 13.7086 15.1016C13.4112 15.5675 12.9708 15.9245 12.4534 16.1188C11.936 16.3132 11.3695 16.3344 10.839 16.1795C10.3084 16.0245 9.84247 15.7017 9.51101 15.2594C9.17954 14.8171 9.00046 14.2793 9.00065 13.7265C9.00065 13.6199 9.04303 13.5175 9.11847 13.4421C9.19391 13.3667 9.29623 13.3243 9.40292 13.3243C9.50961 13.3243 9.61193 13.3667 9.68737 13.4421C9.76281 13.5175 9.80519 13.6199 9.80519 13.7265C9.80253 13.9581 9.84585 14.1879 9.93264 14.4026C10.0194 14.6174 10.1479 14.8127 10.3108 14.9774C10.4736 15.1421 10.6675 15.2729 10.8812 15.3621C11.0949 15.4513 11.3242 15.4973 11.5557 15.4973C11.7873 15.4973 12.0166 15.4513 12.2303 15.3621C12.444 15.2729 12.6379 15.1421 12.8007 14.9774C12.9636 14.8127 13.0921 14.6174 13.1789 14.4026C13.2656 14.1879 13.309 13.9581 13.3063 13.7265C13.3063 13.6199 13.3487 13.5175 13.4241 13.4421C13.4996 13.3667 13.6019 13.3243 13.7086 13.3243C13.8153 13.3243 13.9176 13.3667 13.993 13.4421C14.0685 13.5175 14.1108 13.6199 14.1108 13.7265C14.1082 13.9581 14.1515 14.1879 14.2383 14.4026C14.3251 14.6174 14.4536 14.8127 14.6164 14.9774C14.7792 15.1421 14.9731 15.2729 15.1868 15.3621C15.4005 15.4513 15.6298 15.4973 15.8614 15.4973C16.093 15.4973 16.3223 15.4513 16.536 15.3621C16.7497 15.2729 16.9436 15.1421 17.1064 14.9774C17.2692 14.8127 17.3977 14.6174 17.4845 14.4026C17.5713 14.1879 17.6146 13.9581 17.612 13.7265C17.612 13.6199 17.6544 13.5175 17.7298 13.4421C17.8052 13.3667 17.9075 13.3243 18.0142 13.3243C18.1209 13.3243 18.2232 13.3667 18.2987 13.4421C18.3741 13.5175 18.4165 13.6199 18.4165 13.7265C18.4139 13.9581 18.4572 14.1879 18.544 14.4026C18.6307 14.6174 18.7593 14.8127 18.9221 14.9774C19.0849 15.1421 19.2788 15.2729 19.4925 15.3621C19.7062 15.4513 19.9355 15.4973 20.1671 15.4973C20.3987 15.4973 20.6279 15.4513 20.8417 15.3621C21.0554 15.2729 21.2492 15.1421 21.4121 14.9774C21.5749 14.8127 21.7034 14.6174 21.7902 14.4026C21.877 14.1879 21.9203 13.9581 21.9176 13.7265C21.9176 13.6199 21.96 13.5175 22.0355 13.4421C22.1109 13.3667 22.2132 13.3243 22.3199 13.3243C22.4266 13.3243 22.5289 13.3667 22.6043 13.4421C22.6798 13.5175 22.7222 13.6199 22.7222 13.7265C22.7195 13.9581 22.7628 14.1879 22.8496 14.4026C22.9364 14.6174 23.0649 14.8127 23.2277 14.9774C23.3906 15.1421 23.5844 15.2729 23.7981 15.3621C24.0119 15.4513 24.2411 15.4973 24.4727 15.4973C24.7043 15.4973 24.9336 15.4513 25.1473 15.3621C25.361 15.2729 25.5549 15.1421 25.7177 14.9774C25.8805 14.8127 26.0091 14.6174 26.0958 14.4026C26.1826 14.1879 26.2259 13.9581 26.2233 13.7265C26.2233 13.6199 26.2657 13.5175 26.3411 13.4421C26.4166 13.3667 26.5189 13.3243 26.6256 13.3243C26.7322 13.3243 26.8346 13.3667 26.91 13.4421C26.9854 13.5175 27.0278 13.6199 27.0278 13.7265C27.0271 14.404 26.7577 15.0534 26.2787 15.5325C25.7997 16.0115 25.1503 16.281 24.4728 16.2818Z" fill="#AFD1FD"/>
                <path d="M24.4729 21.0276C24.0438 21.0275 23.6216 20.9192 23.2454 20.7129C22.8691 20.5067 22.5508 20.2089 22.3199 19.8473C22.0892 20.2091 21.771 20.5069 21.3947 20.7132C21.0184 20.9195 20.5962 21.0277 20.1671 21.0277C19.738 21.0277 19.3158 20.9195 18.9395 20.7132C18.5632 20.5069 18.245 20.2091 18.0143 19.8473C17.7835 20.2091 17.4653 20.5069 17.0891 20.7132C16.7128 20.9195 16.2906 21.0277 15.8614 21.0277C15.4323 21.0277 15.0101 20.9195 14.6338 20.7132C14.2576 20.5069 13.9394 20.2091 13.7086 19.8473C13.4115 20.3134 12.9711 20.6706 12.4536 20.8652C11.9362 21.0598 11.3696 21.0812 10.8389 20.9264C10.3082 20.7715 9.84205 20.4486 9.51048 20.0063C9.1789 19.5639 8.99978 19.0259 9 18.4731C9 18.3664 9.04238 18.2641 9.11782 18.1887C9.19326 18.1132 9.29558 18.0708 9.40227 18.0708C9.50896 18.0708 9.61128 18.1132 9.68672 18.1887C9.76216 18.2641 9.80454 18.3664 9.80454 18.4731C9.80189 18.7047 9.8452 18.9345 9.93199 19.1492C10.0188 19.3639 10.1473 19.5593 10.3101 19.724C10.4729 19.8887 10.6668 20.0194 10.8805 20.1086C11.0942 20.1979 11.3235 20.2438 11.5551 20.2438C11.7867 20.2438 12.016 20.1979 12.2297 20.1086C12.4434 20.0194 12.6373 19.8887 12.8001 19.724C12.9629 19.5593 13.0914 19.3639 13.1782 19.1492C13.265 18.9345 13.3083 18.7047 13.3057 18.4731C13.3057 18.3664 13.348 18.2641 13.4235 18.1887C13.4989 18.1132 13.6012 18.0708 13.7079 18.0708C13.8146 18.0708 13.9169 18.1132 13.9924 18.1887C14.0678 18.2641 14.1102 18.3664 14.1102 18.4731C14.1075 18.7047 14.1509 18.9345 14.2376 19.1492C14.3244 19.3639 14.453 19.5593 14.6158 19.724C14.7786 19.8887 14.9725 20.0194 15.1862 20.1086C15.3999 20.1979 15.6292 20.2438 15.8608 20.2438C16.0923 20.2438 16.3216 20.1979 16.5353 20.1086C16.7491 20.0194 16.9429 19.8887 17.1057 19.724C17.2686 19.5593 17.3971 19.3639 17.4839 19.1492C17.5707 18.9345 17.614 18.7047 17.6113 18.4731C17.6113 18.3664 17.6537 18.2641 17.7291 18.1887C17.8046 18.1132 17.9069 18.0708 18.0136 18.0708C18.1203 18.0708 18.2226 18.1132 18.298 18.1887C18.3735 18.2641 18.4159 18.3664 18.4159 18.4731C18.4132 18.7047 18.4565 18.9345 18.5433 19.1492C18.6301 19.3639 18.7586 19.5593 18.9214 19.724C19.0843 19.8887 19.2781 20.0194 19.4918 20.1086C19.7055 20.1979 19.9348 20.2438 20.1664 20.2438C20.398 20.2438 20.6273 20.1979 20.841 20.1086C21.0547 20.0194 21.2486 19.8887 21.4114 19.724C21.5742 19.5593 21.7027 19.3639 21.7895 19.1492C21.8763 18.9345 21.9196 18.7047 21.917 18.4731C21.917 18.3664 21.9594 18.2641 22.0348 18.1887C22.1102 18.1132 22.2126 18.0708 22.3193 18.0708C22.4259 18.0708 22.5283 18.1132 22.6037 18.1887C22.6791 18.2641 22.7215 18.3664 22.7215 18.4731C22.7189 18.7047 22.7622 18.9345 22.849 19.1492C22.9358 19.3639 23.0643 19.5593 23.2271 19.724C23.3899 19.8887 23.5838 20.0194 23.7975 20.1086C24.0112 20.1979 24.2405 20.2438 24.4721 20.2438C24.7037 20.2438 24.933 20.1979 25.1467 20.1086C25.3604 20.0194 25.5542 19.8887 25.7171 19.724C25.8799 19.5593 26.0084 19.3639 26.0952 19.1492C26.182 18.9345 26.2253 18.7047 26.2226 18.4731C26.2226 18.3664 26.265 18.2641 26.3405 18.1887C26.4159 18.1132 26.5182 18.0708 26.6249 18.0708C26.7316 18.0708 26.8339 18.1132 26.9094 18.1887C26.9848 18.2641 27.0272 18.3664 27.0272 18.4731C27.0263 19.1503 26.7569 19.7995 26.2781 20.2783C25.7992 20.7572 25.1501 21.0267 24.4729 21.0276Z" fill="#9AA1EB"/>
                <path d="M19.8167 4.63642L18.2979 3.11791C18.2606 3.08053 18.2163 3.05088 18.1675 3.03065C18.1187 3.01041 18.0664 3 18.0136 3C17.9608 3 17.9085 3.01041 17.8597 3.03065C17.8109 3.05088 17.7665 3.08053 17.7292 3.11791L16.2105 4.63642C16.135 4.71187 16.0927 4.81419 16.0927 4.92088C16.0927 5.02758 16.135 5.1299 16.2105 5.20534C16.2859 5.28079 16.3883 5.32317 16.4949 5.32317C16.6016 5.32317 16.704 5.28079 16.7794 5.20534L17.6113 4.37345V8.38327C17.6113 8.48996 17.6537 8.59228 17.7291 8.66772C17.8046 8.74316 17.9069 8.78554 18.0136 8.78554C18.1203 8.78554 18.2226 8.74316 18.298 8.66772C18.3735 8.59228 18.4158 8.48996 18.4158 8.38327V4.37345L19.2477 5.20534C19.2851 5.2427 19.3294 5.27233 19.3782 5.29255C19.4271 5.31277 19.4794 5.32317 19.5322 5.32317C19.585 5.32317 19.6373 5.31277 19.6861 5.29255C19.735 5.27233 19.7793 5.2427 19.8167 5.20534C19.854 5.16799 19.8836 5.12364 19.9039 5.07483C19.9241 5.02602 19.9345 4.97371 19.9345 4.92088C19.9345 4.86805 19.9241 4.81574 19.9039 4.76693C19.8836 4.71813 19.854 4.67378 19.8167 4.63642Z" fill="#BFFDFF"/>
                <path d="M11.9128 5.86851C11.8755 5.83113 11.8312 5.80147 11.7823 5.78123C11.7335 5.761 11.6812 5.75058 11.6284 5.75058C11.5755 5.75058 11.5232 5.761 11.4744 5.78123C11.4256 5.80147 11.3813 5.83113 11.3439 5.86851L9.82541 7.38702C9.74996 7.46247 9.70758 7.56479 9.70758 7.67148C9.70758 7.77818 9.74996 7.8805 9.82541 7.95594C9.90085 8.03139 10.0032 8.07377 10.1099 8.07377C10.2166 8.07377 10.3189 8.03139 10.3943 7.95594L11.2262 7.12405V11.1339C11.2262 11.2406 11.2686 11.3429 11.344 11.4183C11.4195 11.4938 11.5218 11.5361 11.6285 11.5361C11.7352 11.5361 11.8375 11.4938 11.9129 11.4183C11.9884 11.3429 12.0308 11.2406 12.0308 11.1339V7.12405L12.8627 7.95594C12.9385 8.02921 13.0402 8.06973 13.1456 8.06879C13.2511 8.06786 13.352 8.02553 13.4266 7.95093C13.5011 7.87633 13.5434 7.77543 13.5443 7.66995C13.5452 7.56448 13.5046 7.46288 13.4314 7.38702L11.9128 5.86851Z" fill="#BFFDFF"/>
                <path d="M26.2017 7.38702L24.6831 5.86851C24.6458 5.83113 24.6015 5.80147 24.5527 5.78123C24.5038 5.761 24.4515 5.75058 24.3987 5.75058C24.3458 5.75058 24.2935 5.761 24.2447 5.78123C24.1959 5.80147 24.1516 5.83113 24.1142 5.86851L22.5957 7.38702C22.5573 7.42412 22.5266 7.4685 22.5055 7.51758C22.4844 7.56665 22.4733 7.61944 22.4729 7.67285C22.4724 7.72626 22.4826 7.77923 22.5028 7.82868C22.523 7.87812 22.5528 7.92304 22.5906 7.96081C22.6284 7.99859 22.6733 8.02847 22.7227 8.04871C22.7722 8.06894 22.8251 8.07913 22.8785 8.07868C22.9319 8.07823 22.9847 8.06714 23.0338 8.04607C23.0829 8.02499 23.1273 7.99436 23.1644 7.95594L23.9963 7.12405V11.1339C23.9963 11.2406 24.0387 11.3429 24.1141 11.4183C24.1896 11.4938 24.2919 11.5361 24.3986 11.5361C24.5053 11.5361 24.6076 11.4938 24.683 11.4183C24.7585 11.3429 24.8008 11.2406 24.8008 11.1339V7.12405L25.6327 7.95594C25.7082 8.03139 25.8105 8.07377 25.9172 8.07377C26.0239 8.07377 26.1262 8.03139 26.2017 7.95594C26.2771 7.8805 26.3195 7.77818 26.3195 7.67148C26.3195 7.56479 26.2771 7.46247 26.2017 7.38702Z" fill="#BFFDFF"/>
                <path d="M15.8443 9.25539C15.7915 9.25536 15.7391 9.26574 15.6903 9.28595C15.6415 9.30615 15.5971 9.33578 15.5598 9.37314C15.5224 9.4105 15.4928 9.45486 15.4726 9.50368C15.4524 9.5525 15.442 9.60482 15.442 9.65766V13.0482C15.442 13.1549 15.4844 13.2572 15.5598 13.3327C15.6353 13.4081 15.7376 13.4505 15.8443 13.4505C15.951 13.4505 16.0533 13.4081 16.1287 13.3327C16.2042 13.2572 16.2466 13.1549 16.2466 13.0482V9.65789C16.2466 9.60504 16.2362 9.55271 16.216 9.50387C16.1958 9.45504 16.1662 9.41067 16.1288 9.37329C16.0915 9.33591 16.0471 9.30626 15.9983 9.28603C15.9495 9.2658 15.8971 9.25539 15.8443 9.25539Z" fill="#BFFDFF"/>
                <path d="M20.183 9.25539C20.1302 9.25536 20.0779 9.26574 20.0291 9.28595C19.9802 9.30615 19.9359 9.33578 19.8985 9.37314C19.8612 9.4105 19.8315 9.45486 19.8113 9.50368C19.7911 9.5525 19.7807 9.60482 19.7808 9.65766V13.0482C19.7808 13.1549 19.8232 13.2572 19.8986 13.3327C19.974 13.4081 20.0764 13.4505 20.183 13.4505C20.2897 13.4505 20.3921 13.4081 20.4675 13.3327C20.5429 13.2572 20.5853 13.1549 20.5853 13.0482V9.65789C20.5853 9.60504 20.575 9.55271 20.5548 9.50387C20.5346 9.45504 20.5049 9.41067 20.4676 9.37329C20.4302 9.33591 20.3859 9.30626 20.337 9.28603C20.2882 9.2658 20.2359 9.25539 20.183 9.25539Z" fill="#BFFDFF"/>
                </g>
                </svg>
            )
        case 'cloudy':
            return(
                <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.32" d="M34 21C37.314 21 40 18.314 40 15C40 11.686 37.314 9 34 9H33.938C33.978 8.672 34 8.338 34 8C34 3.582 30.418 0 26 0C22.5 0 19.524 2.248 18.44 5.378C17.67 5.132 16.852 5 16 5C11.582 5 8 8.582 8 13C8 17.418 11.582 21 16 21C16.69 21 17.36 20.912 18 20.748V21H34Z" fill="#73A5E6"/>
                <path d="M8 31C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C11.518 11.68 14.946 9 19 9C23.97 9 28 13.03 28 18C28 18.47 27.964 18.93 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8Z" fill="url(#paint0_linear_2_551)"/>
                <path d="M10 18C10 22.97 14.03 27 19 27C23.502 27 27.23 23.696 27.894 19.38C28.55 19.134 29.258 19 30 19C33.314 19 36 21.686 36 25C36 28.314 33.314 31 30 31H8C3.582 31 0 27.418 0 23C0 18.582 3.582 15 8 15C8.834 15 9.636 15.128 10.392 15.364C10.136 16.198 10 17.082 10 18Z" fill="url(#paint1_radial_2_551)"/>
                <defs>
                <linearGradient id="paint0_linear_2_551" x1="18" y1="9" x2="18" y2="31" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF"/>
                <stop offset="1" stopColor="#9BC1F5"/>
                </linearGradient>
                <radialGradient id="paint1_radial_2_551" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9439 -29.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4"/>
                <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                </radialGradient>
                </defs>
                </svg>
            )
        case 'sundays':
            return(
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.0092 35.5016C30.3584 35.5016 35.5055 30.3547 35.5055 24.0058C35.5055 17.6568 30.3584 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z" fill="url(#paint0_linear_2_547)"/>
                <path d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z" fill="#FFB300"/>
                <defs>
                <linearGradient id="paint0_linear_2_547" x1="24.0092" y1="12.5099" x2="24.0092" y2="35.1951" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFC227"/>
                <stop offset="1" stopColor="#FFB300"/>
                </linearGradient>
                </defs>
                </svg>
                )
        case 'rain':
            return(
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.21798 26.926L6.11798 31.924C5.79798 32.688 6.15598 33.568 6.91998 33.888C7.68398 34.208 8.56398 33.85 8.88398 33.086L10.984 28.088C11.304 27.324 10.946 26.444 10.182 26.124C9.41798 25.804 8.53798 26.162 8.21798 26.926ZM24.218 26.926L22.118 31.924C21.798 32.688 22.156 33.568 22.92 33.888C23.684 34.208 24.564 33.85 24.884 33.086L26.984 28.088C27.304 27.324 26.946 26.444 26.182 26.124C25.418 25.804 24.538 26.162 24.218 26.926ZM16.218 24.926L14.118 29.924C13.798 30.688 14.156 31.568 14.92 31.888C15.684 32.208 16.564 31.85 16.884 31.086L18.984 26.088C19.304 25.324 18.946 24.444 18.182 24.124C17.418 23.804 16.538 24.162 16.218 24.926Z" fill="#66AFEB"/>
                <path d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z" fill="url(#paint0_linear_2_526)"/>
                <path d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z" fill="url(#paint1_radial_2_526)"/>
                <defs>
                <linearGradient id="paint0_linear_2_526" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF"/>
                <stop offset="1" stopColor="#9BC1F5"/>
                </linearGradient>
                <radialGradient id="paint1_radial_2_526" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4"/>
                <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                </radialGradient>
                </defs>
                </svg>
                )
        case 'smallRain':
            return(
                <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.218 26.926L8.11798 31.924C7.79798 32.688 8.15598 33.568 8.91998 33.888C9.68398 34.208 10.564 33.85 10.884 33.086L12.984 28.088C13.304 27.324 12.946 26.444 12.182 26.124C11.418 25.804 10.538 26.162 10.218 26.926ZM20.218 24.926L18.118 29.924C17.798 30.688 18.156 31.568 18.92 31.888C19.684 32.208 20.564 31.85 20.884 31.086L22.984 26.088C23.304 25.324 22.946 24.444 22.182 24.124C21.418 23.804 20.538 24.162 20.218 24.926Z" fill="#66AFEB"/>
                <path d="M8 22C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C11.518 2.68 14.946 0 19 0C23.97 0 28 4.03 28 9C28 9.47 27.964 9.93 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8Z" fill="url(#paint0_linear_2_538)"/>
                <path d="M10 9C10 13.97 14.03 18 19 18C23.502 18 27.23 14.696 27.894 10.38C28.55 10.134 29.258 10 30 10C33.314 10 36 12.686 36 16C36 19.314 33.314 22 30 22H8C3.582 22 0 18.418 0 14C0 9.582 3.582 6 8 6C8.834 6 9.636 6.128 10.392 6.364C10.136 7.198 10 8.082 10 9Z" fill="url(#paint1_radial_2_538)"/>
                <defs>
                <linearGradient id="paint0_linear_2_538" x1="18" y1="0" x2="18" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF"/>
                <stop offset="1" stopColor="#9BC1F5"/>
                </linearGradient>
                <radialGradient id="paint1_radial_2_538" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.75395 -30.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4"/>
                <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                </radialGradient>
                </defs>
                </svg>
                )
        case 'smallRainSun':
            return(
                <svg width="44" height="47" viewBox="0 0 44 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 24C32.4183 24 36 20.4183 36 16C36 11.5817 32.4183 8 28 8C23.5817 8 20 11.5817 20 16C20 20.4183 23.5817 24 28 24Z" fill="url(#paint0_linear_2_531)"/>
                <path d="M26.96 1.45999L27.48 4.41399C27.828 6.38399 24.872 6.90399 24.526 4.93399L24.006 1.97999C23.658 0.00998566 26.614 -0.510014 26.96 1.45999ZM37.546 4.98199L35.826 7.43999C34.678 9.07799 32.222 7.35799 33.368 5.71999L35.088 3.26199C36.236 1.62399 38.692 3.34399 37.546 4.98199ZM16.984 6.45399L19.442 8.17399C21.08 9.32199 19.36 11.778 17.722 10.632L15.264 8.91199C13.626 7.76399 15.346 5.30799 16.984 6.45399ZM38.282 21.366L40.74 23.086C42.378 24.234 40.658 26.69 39.02 25.544L36.562 23.824C34.924 22.676 36.644 20.22 38.282 21.366ZM42.542 14.958L39.588 15.478C37.618 15.826 37.098 12.87 39.068 12.524L42.022 12.004C43.992 11.656 44.512 14.612 42.542 14.958Z" fill="#FFB300"/>
                <path d="M10.218 38.926L8.11798 43.924C7.79798 44.688 8.15598 45.568 8.91998 45.888C9.68398 46.208 10.564 45.85 10.884 45.086L12.984 40.088C13.304 39.324 12.946 38.444 12.182 38.124C11.418 37.804 10.538 38.162 10.218 38.926ZM20.218 36.926L18.118 41.924C17.798 42.688 18.156 43.568 18.92 43.888C19.684 44.208 20.564 43.85 20.884 43.086L22.984 38.088C23.304 37.324 22.946 36.444 22.182 36.124C21.418 35.804 20.538 36.162 20.218 36.926Z" fill="#66AFEB"/>
                <path d="M8 34C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C11.518 14.68 14.946 12 19 12C23.97 12 28 16.03 28 21C28 21.47 27.964 21.93 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8Z" fill="url(#paint1_linear_2_531)"/>
                <path d="M10 21C10 25.97 14.03 30 19 30C23.502 30 27.23 26.696 27.894 22.38C28.55 22.134 29.258 22 30 22C33.314 22 36 24.686 36 28C36 31.314 33.314 34 30 34H8C3.582 34 0 30.418 0 26C0 21.582 3.582 18 8 18C8.834 18 9.636 18.128 10.392 18.364C10.136 19.198 10 20.082 10 21Z" fill="url(#paint2_radial_2_531)"/>
                <defs>
                <linearGradient id="paint0_linear_2_531" x1="36" y1="8" x2="24.7832" y2="19.0723" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB301"/>
                <stop offset="1" stopColor="#FFC533"/>
                </linearGradient>
                <linearGradient id="paint1_linear_2_531" x1="18" y1="12" x2="18" y2="34" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9FC7FF"/>
                <stop offset="1" stopColor="#9BC1F5"/>
                </linearGradient>
                <radialGradient id="paint2_radial_2_531" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0679 -22.6966) rotate(-90) scale(20.9574 6.69705)">
                <stop stopColor="#486DA8" stopOpacity="0.4"/>
                <stop offset="1" stopColor="#486DA8" stopOpacity="0"/>
                </radialGradient>
                </defs>
                </svg>
                )
        default:
           return null
    }

}