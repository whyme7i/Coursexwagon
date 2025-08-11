import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, BookOpen, Headphones, GraduationCap } from 'lucide-react';
import Chart from 'chart.js/auto';

const MarketPage = () => {
  const ebooks = useRef<HTMLCanvasElement>(null);
  const audiobooks = useRef<HTMLCanvasElement>(null);
  const courses = useRef<HTMLCanvasElement>(null);
  const overallTrend = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    document.title = "Market Growth | COURSE.XWAGON";
    
    // Initialize charts when component mounts
    if (ebooks.current) {
      const ebooksChart = new Chart(ebooks.current, {
        type: 'bar',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
          datasets: [{
            label: 'Ebook Sales (Billions $)',
            data: [16.2, 18.8, 21.3, 25.1, 29.4, 34.7],
            backgroundColor: 'hsl(var(--chart-1))',
            borderColor: 'hsl(var(--chart-1))',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `$${context.parsed.y} Billion`;
                }
              }
            }
          }
        }
      });
    }
    
    if (audiobooks.current) {
      const audiobooksChart = new Chart(audiobooks.current, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
          datasets: [{
            label: 'Audiobook Revenue (Billions $)',
            data: [3.3, 4.8, 6.9, 9.8, 13.2, 17.1],
            borderColor: 'hsl(var(--chart-2))',
            backgroundColor: 'rgba(0, 100, 200, 0.2)',
            tension: 0.3,
            fill: true
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
    
    if (courses.current) {
      const coursesChart = new Chart(courses.current, {
        type: 'bar',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
          datasets: [{
            label: 'Online Course Market (Billions $)',
            data: [101, 115, 142, 178, 205, 240],
            backgroundColor: 'hsl(var(--chart-3))',
            borderColor: 'hsl(var(--chart-3))',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `$${context.parsed.y} Billion`;
                }
              }
            }
          }
        }
      });
    }
    
    if (overallTrend.current) {
      const overallChart = new Chart(overallTrend.current, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022', '2023', '2024', '2025 (Projected)'],
          datasets: [
            {
              label: 'Ebooks',
              data: [16.2, 18.8, 21.3, 25.1, 29.4, 34.7],
              borderColor: 'hsl(var(--chart-1))',
              backgroundColor: 'transparent',
              tension: 0.3
            },
            {
              label: 'Audiobooks',
              data: [3.3, 4.8, 6.9, 9.8, 13.2, 17.1],
              borderColor: 'hsl(var(--chart-2))',
              backgroundColor: 'transparent',
              tension: 0.3
            },
            {
              label: 'Online Courses',
              data: [101, 115, 142, 178, 205, 240],
              borderColor: 'hsl(var(--chart-3))',
              backgroundColor: 'transparent',
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
    
    // Clean up
    return () => {
      Chart.getChart(ebooks.current as HTMLCanvasElement)?.destroy();
      Chart.getChart(audiobooks.current as HTMLCanvasElement)?.destroy();
      Chart.getChart(courses.current as HTMLCanvasElement)?.destroy();
      Chart.getChart(overallTrend.current as HTMLCanvasElement)?.destroy();
    };
  }, []);

  return (
    <div className="container py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 heading-gradient">Market Growth Analytics</h1>
        <p className="text-xl text-foreground/70 mb-12">
          Explore the exponential growth of digital content markets worldwide
        </p>
      </motion.div>

      {/* Market Overview */}
      <Card className="mb-12 border border-gold/20">
        <CardHeader className="pb-4">
          <div className="flex items-center mb-2">
            <TrendingUp className="w-6 h-6 text-gold mr-2" />
            <CardTitle>Global Digital Content Market Trends</CardTitle>
          </div>
          <CardDescription>
            Comparative analysis of ebooks, audiobooks, and online course markets (2020-2025)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <canvas ref={overallTrend}></canvas>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 p-4 rounded-lg border border-muted">
              <h3 className="text-lg font-bold text-gold">Ebooks</h3>
              <p className="text-3xl font-bold">$34.7B</p>
              <p className="text-sm text-muted-foreground">Projected market size by 2025</p>
            </div>
            
            <div className="bg-card/50 p-4 rounded-lg border border-muted">
              <h3 className="text-lg font-bold text-vault-blue">Audiobooks</h3>
              <p className="text-3xl font-bold">$17.1B</p>
              <p className="text-sm text-muted-foreground">Projected market size by 2025</p>
            </div>
            
            <div className="bg-card/50 p-4 rounded-lg border border-muted">
              <h3 className="text-lg font-bold text-accent">Online Courses</h3>
              <p className="text-3xl font-bold">$240B</p>
              <p className="text-sm text-muted-foreground">Projected market size by 2025</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analysis Tabs */}
      <Tabs defaultValue="ebooks" className="mb-12">
        <TabsList className="w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="ebooks" className="flex-1">
            <BookOpen className="w-4 h-4 mr-2" />
            Ebooks
          </TabsTrigger>
          <TabsTrigger value="audiobooks" className="flex-1">
            <Headphones className="w-4 h-4 mr-2" />
            Audiobooks
          </TabsTrigger>
          <TabsTrigger value="courses" className="flex-1">
            <GraduationCap className="w-4 h-4 mr-2" />
            Courses
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="ebooks" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-gold/20">
              <CardHeader>
                <CardTitle>Ebook Market Analysis</CardTitle>
                <CardDescription>Annual market size in billions USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] mb-6">
                  <canvas ref={ebooks}></canvas>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Key Growth Factors</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Increasing adoption of e-readers and tablets</li>
                      <li>Growing preference for portable digital libraries</li>
                      <li>Rising demand for specialized knowledge content</li>
                      <li>Self-publishing platforms lowering entry barriers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Top Performing Categories</h4>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li className="text-gold">Self-improvement & Personal Finance</li>
                      <li className="text-gold/90">Business & Entrepreneurship</li>
                      <li className="text-gold/80">Romance & Fantasy Fiction</li>
                      <li className="text-gold/70">Technical & Professional</li>
                      <li className="text-gold/60">Adult & Specialized Content</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="audiobooks" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-vault-blue/20">
              <CardHeader>
                <CardTitle>Audiobook Market Analysis</CardTitle>
                <CardDescription>Annual market size in billions USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] mb-6">
                  <canvas ref={audiobooks}></canvas>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Growth Accelerators</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>417% growth projected between 2020-2025</li>
                      <li>Rising podcast culture driving audio content demand</li>
                      <li>Increasing commute times & multitasking</li>
                      <li>Improved audio quality and production standards</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Consumer Demographics</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-vault-blue font-bold">45%</p>
                        <p className="text-xs text-muted-foreground">Aged 25-34</p>
                      </div>
                      <div>
                        <p className="text-vault-blue font-bold">68%</p>
                        <p className="text-xs text-muted-foreground">Listen while commuting</p>
                      </div>
                      <div>
                        <p className="text-vault-blue font-bold">73%</p>
                        <p className="text-xs text-muted-foreground">Listen on smartphones</p>
                      </div>
                      <div>
                        <p className="text-vault-blue font-bold">3.5hrs</p>
                        <p className="text-xs text-muted-foreground">Average weekly listening</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="courses" className="mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border border-accent/20">
              <CardHeader>
                <CardTitle>Online Course Market Analysis</CardTitle>
                <CardDescription>Annual market size in billions USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] mb-6">
                  <canvas ref={courses}></canvas>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Market Drivers</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Growing preference for self-paced learning</li>
                      <li>Rising costs of traditional education</li>
                      <li>Demand for specialized skills training</li>
                      <li>Remote work driving digital skills development</li>
                      <li>Direct industry expert access through courses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card/50 p-4 rounded-lg border border-muted">
                    <h4 className="font-semibold mb-2">Fastest Growing Segments</h4>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Business & Entrepreneurship</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="w-full bg-background h-2 rounded-full">
                          <div className="bg-accent h-2 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Personal Development</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="w-full bg-background h-2 rounded-full">
                          <div className="bg-accent h-2 rounded-full" style={{ width: '28%' }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Digital Marketing</span>
                          <span className="font-medium">24%</span>
                        </div>
                        <div className="w-full bg-background h-2 rounded-full">
                          <div className="bg-accent h-2 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
      
      {/* Market Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-6">Market Insights & Opportunities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gold/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Consumer Behavior</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>74% of consumers prefer digital content for instant access and convenience</p>
              <p>Mobile consumption grew by 38% in 2023 across all digital content types</p>
              <p>81% of users cite "learning on the go" as a primary reason for audiobook adoption</p>
            </CardContent>
          </Card>
          
          <Card className="border border-vault-blue/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Content Creator Economy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Independent content creators now account for 37% of total market revenue</p>
              <p>Average income for top 10% of digital creators exceeded $152,000 in 2023</p>
              <p>Multi-format content (book + audiobook + course) generates 2.8x more revenue</p>
            </CardContent>
          </Card>
          
          <Card className="border border-accent/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Future Projections</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>Combined digital content market expected to surpass $300 billion by 2026</p>
              <p>AI-enhanced content creation tools projected to increase output by 45%</p>
              <p>Specialized knowledge marketplaces estimated to grow at 27% CAGR through 2028</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default MarketPage;