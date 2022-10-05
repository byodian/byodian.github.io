---
title: 如何 DIY 一台电脑主机
mySlug: how to build a new pc
tags:
  - 装机
created: 2022-10-04
description: 如何在新PC中安装Windows操作系统
---

## 购买零部件

1. CPU （intel、AMD）
2. CPU 风扇（塔式风冷、水冷）
3. 主板（微星、华硕和技嘉）
4. 显卡（英伟达、AMD）
5. 内存（金士顿、芝奇、英睿达、威刚）
6. 硬盘（三星）
7. 电源（振华、海韵、美商海盗船，航嘉）
8. 机箱（爱国者）

## 如何挑选 CPU

### 了解你的 CPU 需求（笔记本、桌上电脑）

### CPU 运行方式

- 核心数。现代 CPU 具备多核心，每个核心就像额外的处理器，能让 CPU 同时处理多重指令。
- CPU 时钟频率（又称时钟速率）是 CPU 每秒可执行的周期数。一个周期值内部振荡器产生一个同步脉冲，期间会有数十亿个电晶体的开启和关闭。现在的 CPU 每秒执行数十亿个周期，时钟的速度测量单位为 GHZ。
- CPU 的功能
    1. 集成显示处理器。在 intel 处理器中，名称包含 「F」 的 CPU，是唯一没有集成显示处理器的。
    2. 笔记本电脑特定的功能。选取笔记本电脑时，请查看 「H」字号结尾的 intel 处理器。这些处理器是专为便携式电脑而设计的，目的在于减少电源消耗量并延长电池寿命。
    3. 超频。型号名称结尾包含「K」的产品，例如 Inter Core i7-12700K 处理器。这代表 CPU 设计为可超频。如果你有适合的硬件支撑，比如适当的散热方案、支持超频的主板，你便可以用不锁频的 CPU 享受更快的时钟频率。

### 挑选合适的 intel 处理器

- Intel 酷睿 i3，适合入门级游戏效能
- Intel 酷睿 i5，适合中级游戏效能
- Intel 酷睿 i7，适合高级游戏效能
- Intel 酷睿 i9，适合最高级游戏效能

从 CPU 名称看不同种类的 Intel 处理器，具体请参考 [intel CPU 名称指南](https://www.intel.com.tw/content/www/tw/zh/gaming/resources/gaming-processor-names.html)。以 Intel Core i9-13900K 为例：

- 品牌：Intel Core
- 处理器系列：i9，**更高的层级可能会有较高的最大频率（ GHZ）、更高的核心数、更大的快取大小以及扩充功能组。**
- SKU: 13900
    - 第一个或前两个数字，代表世代的编号，这里的 13 表示第十三代。**新的迭代倾向于提供更新的功能。**
    - 代别编号之后的数字，这里指 900 是处理器号码。**代别号码用于区分处理器系列中的不同功能**，包括基本的时钟频率、最大频率、快取大小、核心数/执行线程数以及缓存支持。
- 产品线：K。CPU 名称末尾的系列尾码表示该处理器所适用的系统类型，比如桌上电脑、笔记本电脑或者其他移动设备。
    
    无尾码/S 这些处理器专为桌上电脑打造
    
    K 指可超频的未锁频游戏处理器
    
    H 是笔记本电脑的处理器系列
    
    F 表示没有集成显示处理器的 CPU。它们必须搭配独立显卡使用
    

### 查看效能指标

要想进一步缩小范围，其中最好的办法之一就是参考反映你的电脑期望用途的基准测试。比如，搜寻你打算玩的特定游戏以及该游戏对处理器的要求，然后评估 FPS 等效能指标来寻找符合的 CPU。

关于效能指标请[参考了解CPU的效能指标](https://www.intel.com.tw/content/www/tw/zh/gaming/resources/read-cpu-benchmarks.html)

**效能指标**：丢失画面帧数、FPS（针对影片和游戏）、影格率（低 1%和低 0.1%）、GB/s、MIPS（每秒百万指令数）和渲染时间。

**测量效能指标的工具**

- PassMark（执行大量的数学运算）
- 3DMark（衡量系统处理游戏 3D 建模渲染的能力）
- PCMark10
- [Intel Extreme Tuning Utility](https://www.intel.com.tw/content/www/tw/zh/gaming/resources/overclocking-xtu-guide.html) (超频和压力测试）
- 7-ZIP 实战可测量 CPU 压缩和解压速度
- Blender 实战测量 CPU 的 3D 渲染速度
- Handbrake 实战测量 CPU 的影片编码速度

**检测 CPU 运行参数的工具**

- [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html) 提供有关处理器、主板和 RAM 的必要咨询
- [Core Temp](https://www.alcpu.com/CoreTemp/) 监控各个核心温度，还显示 CPU 的实时功耗
- [RealBench](https://rog.asus.com/rog-pro/realbench-v2-leaderboard/) 是华硕建立的效能评定公式，旨在模拟高工作负载环境，例如图像编辑、视频编码和多任务处理等。
- [3DMark](https://benchmarks.ul.com/) 测量电脑整体效能。

### 注意

不同主板对应不同的 CPU 引脚插座，请注意区分。比如 第十二代的 Intel 酷睿处理器使用的 LGA 1700 引脚插座。

## CPU 风扇

散热器主流分为风冷和水冷两大类，而风冷有塔式和下沉式区分。购买风扇时，**应注意风扇的高度不可大于机箱的允许范围**，否则风扇就会装不进机箱。

## 主板

普通用户使用的主板按照大小一般分三种类型

- 迷你 - ITX 17cm*17cm
- 微型 - MATX 24.4cm*24.4cm
- 标准 - ATX 30.5cm*30.5cm

按照芯片组分**英特尔和 AMD** 两种类型**，**芯片组影响主板的价格，以及功能和规格。**你应该根据 CPU 类型选购指定芯片组的主板，市面上**主要的主板生产商为技嘉、微星和华硕。

## 内存

内存可提高 CPU 从硬盘驱动器访问数据的速度，选购内存参考两个参数：容量和频率（速度）。内存颗粒决定了内存的超频能力，颗粒体质越好，超频能力越强。主要的颗粒生产商三星、镁光和海力士。DDR4 是现在的主流产品。

## 显卡

从计算机里获取数据数据并以文本、图像和颜色等形式输出到显示器。

显卡按照生产商主要有华硕、微星和技嘉三类。

显卡按照芯片组主要分为英伟达（NVIDIA）和 AMD 两类。英伟达适合游戏玩家，当前市场兼容性好，AMD 在特定领域也有自己的优势。**显卡的型号越高，性能越好**。

## 硬盘

目前市面上有三种类型硬盘接口

1. SATA 接口
2. M.2接口，基于 SDTA和PCI-E 幸好
3. U.2 接口 PCI-E 型号

## 机箱

材料大多使用 SECC/SGCC星镀锌钢，钢制机箱便宜坚固、但重。铝镁合金机箱贵；混合材料，主体部分采用镀锌钢，侧板使用钛镁合金或者玻璃制作。

注意：选择气流设计，免用工具的安装可扩展，可扩展空间可以连接更多硬盘、显卡和满足冷却的要求。

## 显示器

要点：

1. 面板类型
2. 高度
3. 对比度
4. 刷新率
5. 扩展性

## RGB 灯光设计

RGB 主板接口定义 12V/5V

## 参考

1. [如何涂抹散热膏](https://www.intel.com.tw/content/www/tw/zh/gaming/resources/how-to-apply-thermal-paste.html)
2. [如何组装游戏电脑](https://www.intel.cn/content/www/cn/zh/gaming/resources/how-to-build-a-gaming-pc.html)
3. [如何选择游戏 CPU](https://www.intel.cn/content/www/cn/zh/gaming/resources/gaming-cpu.html)
