import {AbstractLinks} from './links'
import {SemVer} from 'semver'

// # Dictionary of known cuda versions and thier download URLS, which do not follow a consistent pattern :(
// cuda toolkit downloads here:
// https://developer.nvidia.com/cuda-toolkit-archive

/**
 * Singleton class for windows links.
 */
export class WindowsLinks extends AbstractLinks {
  // Singleton instance
  private static _instance: WindowsLinks

  private cudaVersionToNetworkUrl: Map<string, string> = new Map([
    [
      '11.8', // Latest version of 11.8.x
      'https://developer.download.nvidia.com/compute/cuda/11.8.0/network_installers/cuda_11.8.0_windows_network.exe'
    ],
    [
      '11.8.0',
      'https://developer.download.nvidia.com/compute/cuda/11.8.0/network_installers/cuda_11.8.0_windows_network.exe'
    ],
    [
      '11.7', // Latest version of 11.7.x
      'https://developer.download.nvidia.com/compute/cuda/11.7.1/network_installers/cuda_11.7.1_windows_network.exe'
    ],
    [
      '11.7.1',
      'https://developer.download.nvidia.com/compute/cuda/11.7.1/network_installers/cuda_11.7.1_windows_network.exe'
    ],
    [
      '11.7.0',
      'https://developer.download.nvidia.com/compute/cuda/11.7.0/network_installers/cuda_11.7.0_windows_network.exe'
    ],
    [
      '11.6', // Latest version of 11.6.x
      'https://developer.download.nvidia.com/compute/cuda/11.6.2/network_installers/cuda_11.6.2_windows_network.exe'
    ],
    [
      '11.6.2',
      'https://developer.download.nvidia.com/compute/cuda/11.6.2/network_installers/cuda_11.6.2_windows_network.exe'
    ],
    [
      '11.6.1',
      'https://developer.download.nvidia.com/compute/cuda/11.6.1/network_installers/cuda_11.6.1_windows_network.exe'
    ],
    [
      '11.6.0',
      'https://developer.download.nvidia.com/compute/cuda/11.6.0/network_installers/cuda_11.6.0_windows_network.exe'
    ],
    [
      '11.5', // Latest version of 11.5.x
      'https://developer.download.nvidia.com/compute/cuda/11.5.2/network_installers/cuda_11.5.2_win10_network.exe'
    ],
    [
      '11.5.2',
      'https://developer.download.nvidia.com/compute/cuda/11.5.2/network_installers/cuda_11.5.2_windows_network.exe'
    ],
    [
      '11.5.1',
      'https://developer.download.nvidia.com/compute/cuda/11.5.1/network_installers/cuda_11.5.1_windows_network.exe'
    ],
    [
      '11.5',
      'https://developer.download.nvidia.com/compute/cuda/11.5.2/network_installers/cuda_11.5.2_windows_network.exe'
    ],
    [
      '11.4', // Latest version of 11.4.x
      'https://developer.download.nvidia.com/compute/cuda/11.4.3/network_installers/cuda_11.4.3_win10_network.exe'
    ],
    [
      '11.4.3',
      'https://developer.download.nvidia.com/compute/cuda/11.4.3/network_installers/cuda_11.4.3_win10_network.exe'
    ],
    [
      '11.4.2',
      'https://developer.download.nvidia.com/compute/cuda/11.4.2/network_installers/cuda_11.4.2_win10_network.exe'
    ],
    [
      '11.4.1',
      'https://developer.download.nvidia.com/compute/cuda/11.4.1/network_installers/cuda_11.4.1_win10_network.exe'
    ],
    [
      '11.4.0',
      'https://developer.download.nvidia.com/compute/cuda/11.4.0/network_installers/cuda_11.4.0_win10_network.exe'
    ],
    [
      '11.3',  // Latest version of 11.3.x
      'https://developer.download.nvidia.com/compute/cuda/11.3.1/network_installers/cuda_11.3.1_win10_network.exe'
    ],
    [
      '11.3.1',
      'https://developer.download.nvidia.com/compute/cuda/11.3.1/network_installers/cuda_11.3.1_win10_network.exe'
    ],
    [
      '11.3.0',
      'https://developer.download.nvidia.com/compute/cuda/11.3.0/network_installers/cuda_11.3.0_win10_network.exe'
    ],
    [
      '11.2',  // Latest version of 11.2.x
      'https://developer.download.nvidia.com/compute/cuda/11.2.2/network_installers/cuda_11.2.2_win10_network.exe'
    ],
    [
      '11.2.2',
      'https://developer.download.nvidia.com/compute/cuda/11.2.2/network_installers/cuda_11.2.2_win10_network.exe'
    ],
    [
      '11.2.1',
      'https://developer.download.nvidia.com/compute/cuda/11.2.1/network_installers/cuda_11.2.1_win10_network.exe'
    ],
    [
      '11.2.0',
      'https://developer.download.nvidia.com/compute/cuda/11.2.0/network_installers/cuda_11.2.0_win10_network.exe'
    ],
    [
      '11.1',  // Latest version of 11.1.x
      'https://developer.download.nvidia.com/compute/cuda/11.1.1/network_installers/cuda_11.1.1_win10_network.exe'
    ],
    [
      '11.1.1',
      'https://developer.download.nvidia.com/compute/cuda/11.1.1/network_installers/cuda_11.1.1_win10_network.exe'
    ],
    [
      '11.1.0',
      'https://developer.download.nvidia.com/compute/cuda/11.1.0/network_installers/cuda_11.1.0_win10_network.exe'
    ],
    [
      '11.0',  // Latest version of 11.0.x
      'https://developer.download.nvidia.com/compute/cuda/11.0.3/network_installers/cuda_11.0.3_win10_network.exe'
    ],
    [
      '11.0.3',
      'https://developer.download.nvidia.com/compute/cuda/11.0.3/network_installers/cuda_11.0.3_win10_network.exe'
    ],
    [
      '11.0',  // Latest version of 11.0.x
      'https://developer.download.nvidia.com/compute/cuda/11.0.2/network_installers/cuda_11.0.2_win10_network.exe'
    ],
    [
      '11.0.2',
      'https://developer.download.nvidia.com/compute/cuda/11.0.2/network_installers/cuda_11.0.2_win10_network.exe'
    ],
    [
      '11.0.1',
      'https://developer.download.nvidia.com/compute/cuda/11.0.1/network_installers/cuda_11.0.1_win10_network.exe'
    ],
    [
      '11.0.0',
      'https://developer.download.nvidia.com/compute/cuda/11.0.0/network_installers/cuda_11.0.0_win10_network.exe'
    ],
    [
      '10.2.89',
      'https://developer.download.nvidia.com/compute/cuda/10.2/Prod/network_installers/cuda_10.2.89_win10_network.exe'
    ],
    [
      '10.1.243',
      'https://developer.download.nvidia.com/compute/cuda/10.1/Prod/network_installers/cuda_10.1.243_win10_network.exe'
    ],
    [
      '10.0.130',
      'https://developer.nvidia.com/compute/cuda/10.0/Prod/network_installers/cuda_10.0.130_win10_network'
    ],
    [
      '9.2.148',
      'https://developer.nvidia.com/compute/cuda/9.2/Prod2/network_installers2/cuda_9.2.148_win10_network'
    ],
    [
      '8.0.61',
      'https://developer.nvidia.com/compute/cuda/8.0/Prod2/network_installers/cuda_8.0.61_win10_network-exe'
    ]
  ])

  // Private constructor to prevent instantiation
  private constructor() {
    super()
    // Map of cuda SemVer version to download URL
    this.cudaVersionToURL = new Map([
      [
        '11.8', // Latest version of 11.8.x
        'https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_522.06_windows.exe'
      ],
      [
        '11.8.0',
        'https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_522.06_windows.exe'
      ],
      [
        '11.7', // Latest version of 11.7.x
        'https://developer.download.nvidia.com/compute/cuda/11.7.1/local_installers/cuda_11.7.1_516.94_windows.exe'
      ],
      [
        '11.7.1',
        'https://developer.download.nvidia.com/compute/cuda/11.7.1/local_installers/cuda_11.7.1_516.94_windows.exe'
      ],
      [
        '11.7.0',
        'https://developer.download.nvidia.com/compute/cuda/11.7.0/local_installers/cuda_11.7.0_516.01_windows.exe'
      ],
      [
        '11.6', // Latest version of 11.6.x
        'https://developer.download.nvidia.com/compute/cuda/11.6.2/local_installers/cuda_11.6.2_511.65_windows.exe'
      ],
      [
        '11.6.2',
        'https://developer.download.nvidia.com/compute/cuda/11.6.2/local_installers/cuda_11.6.2_511.65_windows.exe'
      ],
      [
        '11.6.1',
        'https://developer.download.nvidia.com/compute/cuda/11.6.1/local_installers/cuda_11.6.1_511.65_windows.exe'
      ],
      [
        '11.6.0',
        'https://developer.download.nvidia.com/compute/cuda/11.6.0/local_installers/cuda_11.6.0_511.23_windows.exe'
      ],
      [
        '11.5', // Latest version of 11.5.x
        'https://developer.download.nvidia.com/compute/cuda/11.5.2/local_installers/cuda_11.5.2_496.13_windows.exe'
      ],
      [
        '11.5.2',
        'https://developer.download.nvidia.com/compute/cuda/11.5.2/local_installers/cuda_11.5.2_496.13_windows.exe'
      ],
      [
        '11.5.1',
        'https://developer.download.nvidia.com/compute/cuda/11.5.1/local_installers/cuda_11.5.1_496.13_windows.exe'
      ],
      [
        '11.5.0',
        'https://developer.download.nvidia.com/compute/cuda/11.5.0/local_installers/cuda_11.5.0_496.13_win10.exe'
      ],
      [
        '11.4',
        'https://developer.download.nvidia.com/compute/cuda/11.4.3/local_installers/cuda_11.4.3_472.50_win10.exe'
      ],
      [
        '11.4.3', // Latest version of 11.4.x
        'https://developer.download.nvidia.com/compute/cuda/11.4.3/local_installers/cuda_11.4.3_472.50_win10.exe'
      ],
      [
        '11.4.2',
        'https://developer.download.nvidia.com/compute/cuda/11.4.2/local_installers/cuda_11.4.2_471.41_win10.exe'
      ],
      [
        '11.4.1',
        'https://developer.download.nvidia.com/compute/cuda/11.4.1/local_installers/cuda_11.4.1_471.41_win10.exe'
      ],
      [
        '11.4.0',
        'https://developer.download.nvidia.com/compute/cuda/11.4.0/local_installers/cuda_11.4.0_471.11_win10.exe'
      ],
      [
        '11.3', // Latest version of 11.3.x
        'https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda_11.3.1_465.89_win10.exe'
      ],
      [
        '11.3.1',
        'https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda_11.3.1_465.89_win10.exe'
      ],
      [
        '11.3.0',
        'https://developer.download.nvidia.com/compute/cuda/11.3.0/local_installers/cuda_11.3.0_465.89_win10.exe'
      ],
      [
        '11.2', // Latest version of 11.2.x
        'https://developer.download.nvidia.com/compute/cuda/11.2.2/local_installers/cuda_11.2.2_461.33_win10.exe'
      ],
      [
        '11.2.2',
        'https://developer.download.nvidia.com/compute/cuda/11.2.2/local_installers/cuda_11.2.2_461.33_win10.exe'
      ],
      [
        '11.2.1',
        'https://developer.download.nvidia.com/compute/cuda/11.2.1/local_installers/cuda_11.2.1_461.09_win10.exe'
      ],
      [
        '11.2.0',
        'https://developer.download.nvidia.com/compute/cuda/11.2.0/local_installers/cuda_11.2.0_460.89_win10.exe'
      ],
      [
        '11.1', // Latest version of 11.1.x
        'https://developer.download.nvidia.com/compute/cuda/11.1.1/local_installers/cuda_11.1.1_456.81_win10.exe'
      ],
      [
        '11.1.1',
        'https://developer.download.nvidia.com/compute/cuda/11.1.1/local_installers/cuda_11.1.1_456.81_win10.exe'
      ],
      [
        '11.1.0',
        'https://developer.download.nvidia.com/compute/cuda/11.1.0/local_installers/cuda_11.1.0_456.43_win10.exe'
      ],
      [
        '11.0.3', // Latest version of 11.0.x
        'https://developer.download.nvidia.com/compute/cuda/11.0.3/local_installers/cuda_11.0.3_451.82_win10.exe'
      ],
      [
        '11.0.2',
        'https://developer.download.nvidia.com/compute/cuda/11.0.2/local_installers/cuda_11.0.2_451.48_win10.exe'
      ],
      [
        '11.0.1',
        'https://developer.download.nvidia.com/compute/cuda/11.0.1/local_installers/cuda_11.0.1_451.22_win10.exe'
      ],
      [
        '11.0.0',
        'https://developer.download.nvidia.com/compute/cuda/11.0.2/local_installers/cuda_11.0.2_451.48_win10.exe'
      ],
      [
        '10.2.89',
        'https://developer.download.nvidia.com/compute/cuda/10.2/Prod/local_installers/cuda_10.2.89_441.22_win10.exe'
      ],
      [
        '10.1.243',
        'https://developer.download.nvidia.com/compute/cuda/10.1/Prod/local_installers/cuda_10.1.243_426.00_win10.exe'
      ],
      [
        '10.0.130',
        'https://developer.nvidia.com/compute/cuda/10.0/Prod/local_installers/cuda_10.0.130_411.31_win10'
      ],
      [
        '9.2.148',
        'https://developer.nvidia.com/compute/cuda/9.2/Prod2/local_installers2/cuda_9.2.148_win10'
      ],
      [
        '8.0.61',
        'https://developer.nvidia.com/compute/cuda/8.0/Prod2/local_installers/cuda_8.0.61_win10-exe'
      ]
    ])
  }

  static get Instance(): WindowsLinks {
    return this._instance || (this._instance = new this())
  }

  getAvailableNetworkCudaVersions(): SemVer[] {
    return Array.from(this.cudaVersionToNetworkUrl.keys()).map(
      s => new SemVer(s)
    )
  }

  getNetworkURLFromCudaVersion(version: SemVer): URL {
    const urlString = this.cudaVersionToNetworkUrl.get(`${version}`)
    if (urlString === undefined) {
      throw new Error(`Invalid version: ${version}`)
    }
    return new URL(urlString)
  }
}
