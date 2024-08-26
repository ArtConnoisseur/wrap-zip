'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { FormInput } from '@/components/ui/Input';
import { Seperator } from '@/components/ui/Seperator';
import Image from 'next/image';

const Logo = () => {
    return (
        <svg width="291" height="354" viewBox="0 0 291 354" fill="none" xmlns="http://www.w3.org/2000/svg" id='account-logo'>
            <path d="M85.9802 181.877C86.0204 182.021 86.0535 182.14 86.079 182.232L8.30848 206.253L0.283306 146.485L0.810905 146.449L3.05444 146.297C4.98719 146.167 7.74793 145.981 11.0599 145.759C17.6838 145.315 26.5124 144.727 35.3315 144.152C44.1507 143.578 52.9598 143.016 59.545 142.625C62.8377 142.429 65.5735 142.276 67.4762 142.184C68.4279 142.139 69.1694 142.109 69.6674 142.097C69.9026 142.091 70.0801 142.089 70.1988 142.092C70.2267 142.165 70.2672 142.257 70.3173 142.365C70.4287 142.604 70.5984 142.942 70.8155 143.367C70.9757 143.68 71.1619 144.04 71.3707 144.444C71.7308 145.141 72.1582 145.969 72.6364 146.91C74.145 149.879 76.1446 153.955 78.0418 158.483L78.2284 158.405L78.0418 158.483C80.2957 163.862 82.3211 169.857 83.7835 174.51C84.5145 176.835 85.1045 178.825 85.5118 180.232C85.7154 180.936 85.8732 181.495 85.9802 181.877ZM70.3346 142.099C70.3345 142.099 70.3334 142.099 70.3314 142.099C70.3336 142.099 70.3346 142.099 70.3346 142.099Z" />
            <path d="M238.717 213.746L143.927 232.087C144.834 199.921 151.443 168.678 163.756 138.356L243.113 133.909L238.717 213.746Z" />
            <path d="M112.605 334.5C112.694 339.407 112.5 344.471 111.981 349.716L25.2042 347.036L21.4642 312.342L89.5 311.139" />
            <path d="M237.273 238.359L229.109 353.321L141.127 350.753C137.873 315.705 138.89 280.395 141.722 246L237.273 238.359Z" />
            <path d="M99.1513 291.678L19.5329 297.579L10.704 225.66L89.2011 196.886C97 222.689 102.089 249.942 105.385 278.093" />
            <path d="M94.6192 143.777L94.6192 143.777C94.9854 145.192 94.5242 146.256 93.9663 146.976C93.6858 147.339 93.3812 147.613 93.1465 147.796C93.0294 147.888 92.9304 147.956 92.8616 148.001C92.8324 148.02 92.8088 148.035 92.7915 148.045L81.4339 150.204L79.016 143.055L90.8853 140.974L90.8953 140.974C90.9163 140.974 90.9483 140.975 90.99 140.978C91.0734 140.983 91.1951 140.993 91.3443 141.014C91.6433 141.057 92.0487 141.144 92.4756 141.32C93.3248 141.669 94.2541 142.365 94.6192 143.777Z" />
            <path d="M101.092 162.263L101.092 162.263C100.745 161.128 100.192 160.158 99.3872 159.521C98.589 158.889 97.5174 158.564 96.0835 158.76L101.092 162.263ZM101.092 162.263C101.405 163.285 100.821 164.228 100.068 164.96C99.6979 165.32 99.3048 165.611 99.0027 165.813C98.8521 165.914 98.725 165.992 98.6361 166.044C98.5922 166.07 98.5576 166.089 98.5343 166.102L87.2346 167.965M101.092 162.263L87.2346 167.965M87.2346 167.965L85.3145 161L85.4132 160.977C85.6393 160.924 85.9655 160.849 86.3664 160.757C87.1682 160.573 88.2682 160.323 89.4613 160.061C91.8517 159.535 94.6028 158.962 96.0834 158.76L87.2346 167.965Z" />
            <path d="M93.6419 186.918L91.7318 179.496L91.9262 179.448C92.2071 179.379 92.6102 179.28 93.0986 179.162C94.0756 178.924 95.3941 178.606 96.7603 178.285C98.1268 177.963 99.5402 177.638 100.707 177.386C101.883 177.132 102.787 176.957 103.15 176.929C104.533 176.824 106.239 177.877 106.673 180.462C106.884 181.721 106.456 182.675 105.97 183.321C105.726 183.646 105.468 183.891 105.272 184.055C105.174 184.137 105.092 184.198 105.035 184.238C105.014 184.253 104.996 184.265 104.982 184.274L93.6419 186.918Z" />
            <path d="M111.645 199.035L111.645 199.035C111.827 200.569 111.152 201.576 110.423 202.21C110.056 202.529 109.676 202.753 109.387 202.896C109.243 202.968 109.123 203.019 109.039 203.052C108.997 203.069 108.965 203.081 108.943 203.088L108.925 203.095L97.682 205.422L96.1654 198.433L108.03 195.812L108.031 195.812C108.054 195.814 108.089 195.817 108.134 195.822C108.224 195.832 108.355 195.851 108.514 195.883C108.833 195.947 109.261 196.066 109.697 196.28C110.565 196.705 111.465 197.504 111.645 199.035Z" />
            <path d="M111.575 220.738L111.575 220.738L111.569 220.739L101.809 222.184L100.608 214.921L110.461 213.629L110.47 213.628C110.479 213.628 110.492 213.627 110.51 213.625C110.546 213.623 110.6 213.619 110.669 213.616C110.807 213.61 111.007 213.605 111.249 213.61C111.733 213.622 112.383 213.677 113.05 213.847C114.388 214.188 115.74 214.974 116.056 216.76C116.204 217.594 116.008 218.244 115.636 218.761C115.258 219.285 114.691 219.683 114.084 219.981C113.479 220.278 112.851 220.468 112.371 220.584C112.132 220.641 111.931 220.68 111.791 220.705C111.721 220.717 111.666 220.725 111.629 220.731L111.588 220.736L111.578 220.738L111.576 220.738L111.575 220.738Z" />
            <path d="M105.427 240.485L104.366 233.493L114.758 231.993L114.788 231.992C114.816 231.992 114.859 231.992 114.914 231.992C115.025 231.994 115.185 231.999 115.379 232.015C115.769 232.046 116.293 232.118 116.835 232.282C117.924 232.61 119.033 233.285 119.347 234.681C119.657 236.062 118.882 237.067 117.96 237.756C117.502 238.098 117.02 238.351 116.651 238.518C116.467 238.601 116.313 238.663 116.205 238.703C116.151 238.724 116.108 238.739 116.08 238.748L116.055 238.757L105.427 240.485Z" />
            <path d="M151.391 151.609C151.463 151.622 151.526 151.634 151.582 151.644L149.678 158.775L138.682 156.629L138.658 156.621C138.632 156.611 138.594 156.597 138.545 156.578C138.446 156.54 138.304 156.482 138.135 156.404C137.797 156.247 137.353 156.012 136.927 155.695C136.066 155.055 135.332 154.131 135.552 152.888C135.796 151.513 136.123 150.798 136.621 150.396C137.123 149.99 137.852 149.858 139.038 149.807C139.604 149.783 140.682 149.885 142.003 150.058C143.316 150.23 144.847 150.469 146.306 150.712C147.765 150.954 149.15 151.2 150.171 151.385C150.681 151.477 151.1 151.555 151.391 151.609Z" />
            <path d="M145.597 170.76C145.542 170.752 145.479 170.743 145.407 170.733C145.129 170.695 144.729 170.64 144.24 170.574C143.262 170.443 141.927 170.27 140.501 170.101C137.637 169.761 134.437 169.443 132.991 169.511L145.597 170.76ZM145.597 170.76L144.752 177.781L134.375 176.711L134.375 176.711L134.373 176.711L134.373 176.711L134.373 176.711L134.373 176.711L134.372 176.711L134.366 176.71L134.34 176.707C134.316 176.704 134.279 176.699 134.232 176.691C134.137 176.675 133.997 176.648 133.826 176.603C133.483 176.515 133.015 176.357 132.514 176.083C131.527 175.543 130.412 174.55 129.891 172.719C129.894 172.698 129.899 172.67 129.905 172.637C129.921 172.551 129.946 172.427 129.986 172.277C130.067 171.975 130.202 171.574 130.424 171.171C130.866 170.369 131.635 169.575 132.991 169.511L145.597 170.76Z" />
            <path d="M128.458 188.483L128.458 188.483L128.469 188.483L141.997 188.802L141.387 195.812L128.044 194.94L128.037 194.939C128.02 194.935 127.994 194.928 127.96 194.918C127.893 194.898 127.795 194.865 127.679 194.817C127.446 194.719 127.144 194.558 126.861 194.306C126.309 193.813 125.799 192.943 126.094 191.403C126.395 189.829 127.02 189.114 127.53 188.785C127.789 188.617 128.028 188.543 128.199 188.509C128.285 188.492 128.354 188.486 128.399 188.484C128.422 188.483 128.439 188.483 128.449 188.483L128.458 188.483Z" />
            <path d="M123.579 209.704L123.579 209.704C123.324 208.065 123.674 206.983 124.395 206.322C125.128 205.65 126.304 205.357 127.818 205.436L127.818 205.436C128.683 205.482 131.849 205.662 134.801 205.83C136.276 205.915 137.698 205.996 138.75 206.057L140.013 206.129L140.214 206.141L139.126 213.51L127.135 213.452L127.12 213.45C127.1 213.446 127.068 213.44 127.026 213.432C126.943 213.414 126.822 213.385 126.674 213.339C126.378 213.248 125.977 213.091 125.561 212.83C124.734 212.311 123.839 211.379 123.579 209.704Z" />
            <path d="M125.786 224.726L125.765 224.73C125.736 224.735 125.694 224.743 125.639 224.754C125.53 224.777 125.374 224.811 125.185 224.86C124.806 224.958 124.303 225.112 123.798 225.337C122.762 225.798 121.834 226.501 121.777 227.524L125.786 224.726ZM125.786 224.726L137.142 224.889L136.936 231.993L136.711 231.992L135.465 231.986C134.43 231.981 133.037 231.974 131.611 231.967C128.757 231.952 125.769 231.936 125.222 231.928C125.018 231.925 124.69 231.809 124.294 231.562C123.906 231.321 123.484 230.973 123.097 230.554C122.315 229.707 121.716 228.607 121.777 227.524L125.786 224.726Z" />
            <path d="M125.365 241.086L125.388 241.085L135.711 241.62L135.737 247.891L126.893 248.361L126.859 248.358C126.825 248.355 126.775 248.349 126.71 248.341C126.581 248.325 126.395 248.298 126.171 248.254C125.723 248.166 125.128 248.012 124.534 247.751C123.342 247.226 122.213 246.297 122.19 244.632C122.178 243.735 122.379 243.075 122.673 242.588C122.967 242.1 123.365 241.771 123.768 241.547C124.173 241.323 124.583 241.207 124.893 241.147C125.047 241.117 125.175 241.101 125.264 241.093C125.308 241.089 125.342 241.087 125.365 241.086Z" />
            <path d="M123.599 278.925C122.5 279.359 121.386 280.153 121.489 281.581C121.54 282.291 121.8 282.839 122.159 283.261M125.918 284.733L134.155 285.516C134.155 285.516 133.996 279.26 134.182 278.814C134.315 278.494 129.839 278.436 127.313 278.428" />
            <path d="M122.837 296.873L133.419 297.074L133.649 304.234C133.649 304.234 124.393 304.323 123.373 304.279C122.979 304.262 122.305 304.211 121.626 303.956" />
            <path d="M124.788 315.46L124.814 315.455L132.963 314.849L132.936 321.806L132.85 321.814C132.651 321.833 132.365 321.859 132.019 321.891C131.325 321.955 130.387 322.039 129.409 322.121C127.442 322.288 125.348 322.445 124.733 322.42L124.733 322.42C124.105 322.396 123.463 322.318 122.931 321.886C122.402 321.457 121.932 320.637 121.756 319.015C121.672 318.236 121.823 317.634 122.086 317.168C122.351 316.698 122.738 316.35 123.145 316.093C123.553 315.837 123.974 315.676 124.295 315.58C124.455 315.532 124.589 315.5 124.681 315.48C124.728 315.471 124.764 315.464 124.788 315.46Z" />
            <path d="M117 324.616C118.388 324.495 120.645 324.312 121.551 324.316C122.895 324.323 126.812 324.281 126.933 327.248C127.049 330.111 123.156 330.745 123.156 330.745C123.156 330.745 116.49 330.857 116.5 331C116.505 331.08 116.037 329.794 116 328" />
            <path d="M133.653 333.441L133.472 340.387L125.55 339.945L125.55 339.945L125.548 339.945L125.548 339.945L125.547 339.945L125.547 339.945L125.546 339.945L125.539 339.944L125.509 339.943C125.482 339.941 125.441 339.938 125.39 339.933C125.286 339.924 125.138 339.908 124.959 339.881C124.6 339.827 124.124 339.731 123.65 339.561C122.684 339.215 121.828 338.608 121.805 337.533L121.805 337.533C121.778 336.312 121.961 335.381 122.411 334.739C122.851 334.111 123.578 333.717 124.747 333.638L124.747 333.638C125.96 333.556 128.248 333.506 130.239 333.477C131.233 333.462 132.151 333.453 132.821 333.447C133.155 333.444 133.428 333.442 133.617 333.441L133.653 333.441ZM124.73 333.389L124.73 333.389L124.73 333.389Z" />
            <path d="M125.963 343.172L125.963 343.172C126.488 343.241 126.915 343.635 127.224 344.274C127.531 344.911 127.698 345.752 127.717 346.611C127.725 346.98 127.596 347.215 127.406 347.379C127.204 347.554 126.916 347.665 126.589 347.735C126.264 347.804 125.929 347.828 125.646 347.848L125.631 347.849C125.499 347.858 125.374 347.867 125.274 347.88C125.222 347.886 125.169 347.895 125.121 347.909C125.09 347.917 125.043 347.932 124.996 347.962C124.984 347.965 124.966 347.968 124.941 347.972C124.872 347.982 124.772 347.993 124.642 348.004C124.382 348.025 124.021 348.045 123.589 348.063C122.727 348.098 121.598 348.127 120.473 348.149C119.349 348.171 118.232 348.187 117.396 348.197C116.978 348.202 116.63 348.206 116.387 348.209L116.253 348.21L116.17 343.4L116.308 343.394C116.551 343.383 116.899 343.368 117.321 343.35C118.165 343.314 119.304 343.269 120.482 343.229C121.661 343.188 122.879 343.153 123.882 343.139C124.894 343.125 125.664 343.132 125.963 343.172Z" />
            <path d="M120.859 306.841C120.859 306.841 125.17 306.745 125.367 309.95C125.584 313.5 121.794 314 121.794 314L118.766 314.047" />
            <path d="M141.847 137.559L141.847 137.559C141.979 136.216 142.615 135.507 143.393 135.14C144.192 134.764 145.168 134.736 145.973 134.831L145.973 134.831L145.983 134.832L158.258 135.784L155.16 142.745L145.213 141.509L145.21 141.509L145.181 141.503C145.155 141.498 145.116 141.489 145.065 141.477C144.964 141.453 144.819 141.414 144.645 141.357C144.296 141.242 143.838 141.055 143.392 140.764C142.508 140.186 141.684 139.211 141.847 137.559ZM141.598 137.535L141.598 137.535L141.598 137.535Z" />
            <path d="M107.952 272.226L107.541 259.215C107.541 259.215 108.517 248.068 121.831 248.76C132.068 249.292 133.695 259.71 133.695 259.71L131.914 278.491L127.313 278.287M109.712 277.506L113.075 277.655M120.947 278.004L123.792 278.131" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M115.312 282.925C115.312 282.925 112.893 281.749 113.1 279.234C113.308 276.718 119.78 258.753 120.606 257.422L126.797 258.907C126.797 258.907 120.664 278.683 119.445 280.951C118.225 283.219 115.312 282.925 115.312 282.925Z"  stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M91.8425 335.182C91.8425 335.182 86.5758 334.359 86.244 331.712C85.6906 327.303 85.3429 323.523 85.3429 323.523C85.3429 323.523 84.3514 320.379 86.0884 318.473C88.5447 315.779 110.288 267.122 110.288 267.122C110.288 267.122 111.205 263.961 112.524 264.327C113.843 264.693 115.896 264.268 113.029 269.653C110.162 275.038 108.832 281.301 108.832 281.301C108.832 281.301 108.811 285.193 112.641 286.082C116.47 286.971 118.82 287.709 120.988 285.919C123.157 284.129 125.868 271.298 126.248 270.419C126.628 269.539 129.254 268.246 127.954 274.118L116.671 324.848C116.671 324.848 116.123 329.133 114.441 331.226C112.081 334.163 110.242 338.317 106.124 337.897C102.007 337.477 91.8425 335.182 91.8425 335.182Z"  stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M287.526 25.1796L287.53 25.1867L287.535 25.1935L287.535 25.1938L287.537 25.1957L287.543 25.2045L287.567 25.2415C287.59 25.2747 287.622 25.325 287.665 25.3917C287.749 25.5252 287.871 25.7247 288.018 25.9854C288.311 26.507 288.704 27.2737 289.101 28.2491C289.895 30.2004 290.7 32.9833 290.748 36.3097C290.843 42.946 287.922 51.8042 275.718 60.5722C275.553 60.6904 275.385 60.8114 275.212 60.9351C269.554 65.0001 259.802 72.0056 247.175 78.6219C232.177 86.4783 213.239 94.1505 194.413 101.664C176.023 109.003 157.442 115.188 143.458 119.538C136.466 121.713 130.624 123.43 126.53 124.602C124.483 125.189 122.873 125.639 121.775 125.943C121.432 126.038 121.138 126.118 120.898 126.184C120.956 126.118 121.019 126.047 121.087 125.971C121.575 125.422 122.297 124.613 123.23 123.576C125.097 121.501 127.811 118.511 131.198 114.853C137.971 107.536 147.438 97.543 158.208 86.8415C179.756 65.4309 206.498 41.2083 227.334 29.8761C246.245 19.5924 259.53 15.4798 268.967 15.4085C273.681 15.3729 277.429 16.3455 280.44 18.056C283.452 19.7666 285.741 22.2236 287.526 25.1796Z" />
            <path d="M109.038 24.2543L108.808 24.1551L109.038 24.2543C112.514 16.2114 116.411 9.8767 120.717 5.73885C125.017 1.60599 129.709 -0.323278 134.8 0.398665C145.013 1.8471 157.159 15.2291 154.467 34.1084C151.766 53.0486 140.417 75.1787 133.238 87.2996L133.387 87.3878L133.238 87.2996C129.79 93.1214 123.409 101.127 117.88 107.686C115.118 110.964 112.571 113.877 110.716 115.97C109.788 117.017 109.032 117.859 108.509 118.439C108.345 118.622 108.203 118.778 108.086 118.907C108.079 118.813 108.072 118.709 108.063 118.594C108.021 118.01 107.959 117.151 107.884 116.052C107.732 113.855 107.524 110.697 107.295 106.858C106.838 99.1795 106.301 88.774 105.982 77.8656C105.663 66.9564 105.561 55.5479 105.975 45.8621C106.181 41.0191 106.516 36.6104 107.016 32.912C107.517 29.2088 108.181 26.236 109.038 24.2543Z" />
            <path d="M94.058 125.416C93.8827 125.324 93.6888 125.222 93.4774 125.111C92.3599 124.522 90.751 123.671 88.7856 122.623C84.855 120.529 79.499 117.648 73.7975 114.504C62.3864 108.211 49.6158 100.878 44.101 96.6796C38.571 92.4692 34.0316 88.7157 30.8256 85.5129C29.2226 83.9115 27.9584 82.4533 27.0712 81.1493C26.1815 79.8416 25.6851 78.7094 25.5888 77.7573C25.4027 75.9181 27.2461 73.0979 31.7206 72.8847C36.1948 72.6714 43.2701 75.0903 53.3164 83.7984C63.3702 92.5131 73.7694 103.165 81.6574 111.642C85.6008 115.879 88.9156 119.572 91.2443 122.205C92.4087 123.522 93.3265 124.573 93.9532 125.296C93.9891 125.337 94.024 125.377 94.058 125.416Z" />
        </svg>
    )
}

export default function Accounts({children}) {
    return (
        <div className="w-[80%] self-center h-[850px] flex items-center bg-accent rounded-lg p-4">
            <div className='flex items-center relative justify-center w-[50%] h-full '>
                <div className='text-white px-[10%] flex flex-col rounded-lg gap-10 justify-center items-center py-10'>
                    <h1 className='text-4xl'>Welcome to Wrapzip!</h1>
                    <div className='w-fit h-fit'>
                        <Logo/>
                    </div>
                    <h1 className='text-4xl mt-5'>Wrap in! Zip out!</h1>
                </div>
            </div>
            <div className='bg-background w-[50%] h-full rounded-md flex items-center justify-center'>
                {children}
            </div>
        </div>
    )
}